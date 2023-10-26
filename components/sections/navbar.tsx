"use client"

import Link from 'next/link'
import { useEffect } from 'react'
import { Home } from "lucide-react"
import DarkModeToggle from '@/components/theme-toggle'
import { navLinks } from '@/data/constants'

const windowEvents = ['hashchange', 'resize']

export default function Navbar() {
    const moveTabPosition = (nav_link: HTMLAnchorElement) => {
        if (nav_link) {
            const tab = document.getElementById('tab') as HTMLDivElement
            const navLinkRect = nav_link.getBoundingClientRect()
            const navListLeftPos = document.getElementById('nav-list')?.getBoundingClientRect().left as number

            tab.style.left = `${navLinkRect.left - navListLeftPos}px`
            tab.style.width = `${navLinkRect.width}px`
            tab.style.height = `${navLinkRect.height}px`

            if (tab && !tab.classList.contains('visible-tab')) {
                tab.classList.add('visible-tab')
            }
        }
    }

    var lastScrollPos = 0

    if (typeof window !== 'undefined') {
        window.onscroll = () => {
            const sections = document.querySelectorAll('section')

            const topOfScreen = window.scrollY
            const bottomOfScreen = topOfScreen + window.innerHeight
            const triggerHeight = window.innerHeight * 0.50

            sections.forEach(section => {
                const sectionRect = section.getBoundingClientRect()
                const sectionTop = sectionRect.top + topOfScreen
                const sectionBottom = sectionTop + sectionRect.height

                if (lastScrollPos > topOfScreen) {
                    if (topOfScreen > sectionTop && topOfScreen < sectionBottom - triggerHeight) {
                        if (section.id === 'hero') {
                            window.history.pushState({}, '', '/')
                            document.getElementById('tab')?.classList.remove('visible-tab')
                            return
                        }

                        window.history.pushState({}, '', `#${section.id}`)

                        const navLink = document.querySelector(`.nav-link[href="/#${section.id}"]`) as HTMLAnchorElement
                        moveTabPosition(navLink)
                    }
                } else {
                    if (bottomOfScreen > sectionTop + triggerHeight && bottomOfScreen < sectionBottom) {
                        if (section.id === 'hero') {
                            window.history.pushState({}, '', '/')
                            document.getElementById('tab')?.classList.remove('visible-tab')
                            return
                        }

                        window.history.pushState({}, '', `#${section.id}`)

                        const navLink = document.querySelector(`.nav-link[href="/#${section.id}"]`) as HTMLAnchorElement
                        moveTabPosition(navLink)
                    }
                }
            })

            lastScrollPos = topOfScreen
        }
    }

    const changeTabPositionOnWindowEvent = () => {        
        document.getElementById('tab')?.classList.remove('visible-tab')

        setTimeout(() => {
            if (window.location.pathname === '/resume') {
                moveTabPosition(document.querySelector(`.nav-link[href="/resume"]`) as HTMLAnchorElement)
            } else {
                const hash = window.location.hash
                
                const element = document.querySelector(hash || '#hero') as HTMLElement

                document.body.style
                element?.scrollIntoView({ behavior: 'instant' })

                if (!hash) return

                moveTabPosition(document.querySelector(`.nav-link[href="/${hash}"]`) as HTMLAnchorElement)
            }
        }, 300)
    }

    useEffect(() => {
        windowEvents.forEach(event => {
            window.addEventListener(event, changeTabPositionOnWindowEvent)
        })

        changeTabPositionOnWindowEvent()

        return () => {
            windowEvents.forEach(event => {
                window.removeEventListener(event, changeTabPositionOnWindowEvent)
            })
        }
    }, [])

    return (
        <nav className='backdrop-blur-md bg-white/10 flex flex-row rounded-full px-5 py-2 w-max h-max mx-auto fixed inset-0 top-3 z-10'>
            <ul id="nav-list" className='relative list-none flex justify-center items-center'>
                {Object.entries(navLinks).map((link, index) => (
                    <li key={index} className='flex z-20'>
                        {link[0] === 'Home' ? (
                            <Link className='nav-link' href={link[1]} onClick={ () => { document.getElementById('tab')?.classList.remove('visible-tab') }}>
                                <Home size={24} />
                            </Link>
                        ) :
                            <Link className='nav-link' href={link[1]} {...(link[0] === 'Résumé' ? { target: '_top' } : {})}>
                                {link[0]}
                            </Link>
                        }
                    </li>
                ))}

                <div id="tab" className="absolute z-10 opacity-0 rounded-full backdrop-blur-sm bg-white/50 transition-all ease-in-out" />
            </ul>

            <DarkModeToggle />
        </nav>
    )
}