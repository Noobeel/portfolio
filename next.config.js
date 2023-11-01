/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                has: [
                    {
                        type: 'host',
                        value: 'resume.nabeelasim.net',
                    }
                ],
                destination: '/resume',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig
