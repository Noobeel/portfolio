/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {   
                has: [
                    {
                        type: 'host',
                        value: 'resume.nabeelasim.net',
                    },
                ],
                source: '/',
                destination: '/resume',
                permanent: true,
            },
        ]
    },

    async rewrites() {
        return [
            {
                source: '/resume',
                destination: '/',
            },
        ]
    }

}

module.exports = nextConfig
