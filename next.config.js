/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {   
                source: '/resume',
                destination: 'https://resume.nabeelasim.net',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
