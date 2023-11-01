/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/resume',
                destination: 'http://resume.nabeelasim.net/',
            },
        ]
    }
}

module.exports = nextConfig
