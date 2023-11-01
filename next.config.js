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
            {
                has: [
                    {
                        type: 'host',
                        value: 'nabeelasim.net',
                    },
                ],
                source: '/resume',
                destination: 'https://resume.nabeelasim.net',
                permanent: true,
            },
        ]
    },

    async rewrites() {
        return [
            {
                has: [
                    {
                        type: 'host',
                        value: 'resume.nabeelasim.net',
                    },
                ],
                source: '/resume',
                destination: '/',
            },
        ]
    }

}

module.exports = nextConfig
