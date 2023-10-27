import './globals.css'
import "@/public/devicon.min.css"
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Montserrat, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar, Socials } from '@/components/sections'
import { useEffect } from 'react'

const poppins = Poppins({
    weight: ["700"],
    subsets: ['latin'],
    variable: '--poppins'
})

const montserrat = Montserrat({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin'],
    variable: '--montserrat'
})

export const metadata: Metadata = {
    title: 'Nabeel Asim - Portfolio',
    description: 'A portfolio website for showcasing my projects and skills',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.variable} font-montserrat text-foreground bg-background min-h-screen max-w-full overflow-x-hidden`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Navbar />
                    <Socials />
                    
                    {children}

                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}
