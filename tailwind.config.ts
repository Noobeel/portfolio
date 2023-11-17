/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        screens: {
            fold: { max: "300px" },
            xs: { min: "420px", max: "640px" },
            ...defaultTheme.screens,
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            // Dynamic height and width will be removed once native support is added in Tailwind 3.4
            height: {
                screen: "100svh",
            },
            minHeight: {
                screen: "100svh",
            },
            maxHeight: {
                screen: "100svh",
            },
            width: {
                screen: "100dvw",
            },
            minWidth: {
                screen: "100dvw",
            },
            maxWidth: {
                screen: "100dvw",
            },
            colors: {
                ring: "var(--ring)",
                background: "var(--background)",
                backdrop: "var(--backdrop)",
                active: "var(--active)",
                destructive: "var(--destructive)",
                muted: "var(--muted)",
                popover: "var(--popover)",
                primary: "var(--primary)",
                secondary: "var(--secondary)",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "scroll-down-hero": {
                    "0%": {
                        transformOrigin: "0% 0%",
                        transform: "scale(1, 0)",
                    },
                    "50%": {
                        transformOrigin: "0% 0%",
                        transform: "scale(1, 1)",
                    },
                    "50.1%": {
                        transformOrigin: "0% 100%",
                        transform: "scale(1, 1)",
                    },
                    "100%": {
                        transformOrigin: "0% 100%",
                        transform: "scale(1, 0)",
                    },
                },
                "char-limit-reached": {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                },
            },
            animation: {
                "scroll-down-hero":
                    "scroll-down-hero 1.5s ease-in-out infinite",
                "char-limit-reached":
                    "char-limit-reached 0.5s ease-in-out forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
