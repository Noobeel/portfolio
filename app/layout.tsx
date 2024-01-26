import "./globals.css";
import "@/public/devicon.min.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    authors: [{ name: "Nabeel Asim" }],
    creator: "Nabeel Asim",
    title: {
        template: "Nabeel Asim - %s",
        default: "Nabeel Asim - Portfolio",
    },
    description:
        "A portfolio website for showcasing my projects and skills. Built with Next.js, TypeScript, TailwindCSS, and Shadcn UI.",
    referrer: "origin",
    verification: {
        google: "A3r4pybo8cM9nV9Z5d5rOVBPB24qDJYtHJipnQezbn4",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="lg:landscape:snap-y lg:landscape:snap-mandatory"
            suppressHydrationWarning
        >
            <body
                className={`${poppins.variable} font-montserrat bg-background text-primary min-h-screen max-w-screen overflow-x-hidden`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <SpeedInsights />
                    <Toaster />
                    <Navbar />
                    <Socials />

                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
