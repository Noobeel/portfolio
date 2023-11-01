/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/resume',
                destination: 'https://resume.nabeelasim.net/',
                permanent: true,
            },
        ]
    },

    async rewrites() {
        return [
            {
                source: 'https://resume.nabeelasim.net/',
                destination: '/resume',
            },
        ]
    }

}

module.exports = nextConfig
