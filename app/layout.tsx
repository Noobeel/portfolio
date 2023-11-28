import "./globals.css";
import "@/public/devicon.min.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { Montserrat, Poppins } from "next/font/google";
import { Navbar, Socials } from "@/components/sections";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
    weight: ["700"],
    subsets: ["latin"],
    variable: "--poppins",
});

const montserrat = Montserrat({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--montserrat",
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    title: "Nabeel Asim - Portfolio",
    description: "A portfolio website for showcasing my projects and skills",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="lg:landscape:snap-y lg:landscape:snap-mandatory" suppressHydrationWarning>
            <body
                className={`${poppins.variable} font-montserrat bg-background text-primary min-h-screen max-w-screen overflow-x-hidden`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Analytics />
                    <Toaster />
                    <Navbar />
                    <Socials />

                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
