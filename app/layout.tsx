import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin']
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
            <body className={montserrat.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
