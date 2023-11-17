"use client"

import Link from 'next/link'
import { useEffect } from 'react'
import { Home } from "lucide-react"
import { motion } from 'framer-motion'
import { navLinks } from '@/data/constants'
import DarkModeToggle from '@/components/theme-toggle'

const windowEvents = ['hashchange', 'resize']

export default function Navbar() {
    const moveTabPosition = (navLink: HTMLAnchorElement) => {
        if (navLink) {
            const tab = document.getElementById('tab') as HTMLDivElement
            const navLinkRect = navLink.getBoundingClientRect()
            const navListLeftPos = document.getElementById('nav-list')?.getBoundingClientRect().left as number

            if (window.matchMedia('(max-width: 639px)').matches) {
                tab.style.left = `${navLinkRect.left - navListLeftPos}px`
                tab.style.width = `${navLinkRect.width}px`
            } else {
                tab.style.left = `${navLinkRect.left - navListLeftPos - 5}px`
                tab.style.width = `${navLinkRect.width + 10}px`
            }

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
                const navLink = document.querySelector(`.nav-link[href="/#${section.id}"]`) as HTMLAnchorElement

                if (lastScrollPos > topOfScreen) {
                    if (topOfScreen > sectionTop && topOfScreen < sectionBottom - triggerHeight) {
                        if (section.id === 'hero') {
                            window.history.pushState({}, '', '/')
                            document.getElementById('tab')?.classList.remove('visible-tab')
                            return
                        }

                        window.history.pushState({}, '', `#${section.id}`)
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
                        moveTabPosition(navLink)
                    }
                }
            })

            lastScrollPos = topOfScreen
        }
    }

    useEffect(() => {
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
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className='backdrop-blur-md bg-backdrop flex flex-row rounded-full p-2 w-min h-max mx-auto fixed inset-0 top-3 z-30 fold:px-1 fold:py-0 sm:px-5'
        >
            <ul id="nav-list" className='relative list-none flex justify-center items-center'>
                {Object.entries(navLinks).map((link, index) => (
                    <li key={index} className='flex z-20'>
                        <Link className='nav-link flex justify-center items-center text-[0.82rem] p-2 font-semibold rounded-full fold:px-1.5 fold:py-1.5 fold:text-xs fold:font-normal sm:mx-1 md:text-sm lg:text-[0.9rem] 2xl:text-base'
                            href={link[1]}
                            {...link[0] === 'Home' ? (
                                { onClick: () => { document.getElementById('tab')?.classList.remove('visible-tab') } }
                            ) :
                                { ...(link[0] === 'Résumé' ? { target: '_top' } : {}) }
                            }
                        >
                            {link[0] === 'Home' ? (
                                <Home className='w-5 h-5 xl:w-6 xl:h-6 fold:w-4 fold:h-4' />
                            ) :
                                (link[0])
                            }
                        </Link>
                    </li>
                ))}

                <div id="tab" className="absolute z-10 opacity-0 rounded-full backdrop-blur-sm bg-active transition-all ease-in-out" />

                <DarkModeToggle />
            </ul>
        </motion.nav>
    )
}