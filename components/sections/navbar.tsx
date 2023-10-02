"use client"

import Link from 'next/link'
import DarkModeToggle from '@/components/theme-toggle'
import { useEffect } from 'react'

interface NavLink {
    [key: string]: string
}

const windowEvents = ['hashchange', 'resize']

const navLinks: NavLink = {
    About: '#about',
    Skills: '#skills',
    Projects: '#projects',
    Contact: '#contact',
    Résumé: '/resume'
}

export default function Navbar() {
    

    const moveTabPosition = (nav_link: HTMLAnchorElement) => {
        if (nav_link) {
            const tab = document.querySelector('.tab') as HTMLDivElement
            const navLinkRect = nav_link.getBoundingClientRect()
            const navListLeftPos = document.querySelector('.nav-list')?.getBoundingClientRect().left as number
            
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
                            document.querySelector('.tab')?.classList.remove('visible-tab')
                            return
                        }

                        window.history.pushState({}, '', `#${section.id}`)

                        const navLink = document.querySelector(`.nav-link[href="#${section.id}"]`) as HTMLAnchorElement
                        moveTabPosition(navLink)
                    }
                } else {
                    if (bottomOfScreen > sectionTop + triggerHeight && bottomOfScreen < sectionBottom) {
                        if (section.id === 'hero') {
                            window.history.pushState({}, '', '/')
                            document.querySelector('.tab')?.classList.remove('visible-tab')
                            return
                        }

                        window.history.pushState({}, '', `#${section.id}`)

                        const navLink = document.querySelector(`.nav-link[href="#${section.id}"]`) as HTMLAnchorElement
                        moveTabPosition(navLink)
                    }
                }
            })

            lastScrollPos = topOfScreen
        }
    }

    const changeTabPositionOnWindowEvent = () => {
        document.querySelector('.tab')?.classList.remove('visible-tab')

        setTimeout(() => {
            const hash = window.location.hash

            const element = document.querySelector(hash || '#hero') as HTMLElement

            document.body.style
            element.scrollIntoView({ behavior: 'instant' })

            if (!hash) return

            moveTabPosition(document.querySelector(`.nav-link[href="${hash}"]`) as HTMLAnchorElement)
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
        <nav>
            <ul className='nav-list'>

                {Object.entries(navLinks).map((link, index) => (
                    <li key={index} className='nav-item'>
                        <Link className='nav-link' href={link[1]}>
                            {link[0]}
                        </Link>
                    </li>
                ))}

                <div className="tab" />
            </ul>

            <DarkModeToggle />
        </nav>
    )
}