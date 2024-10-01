/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'wedding-organizer-backend.test',
                port: '', // Leave empty if there's no specific port
                pathname: '/**', // Allow any path
            },
            {
                protocol: 'http',
                hostname: 'wedding-organizer-backend.test',
                port: '',
                pathname: '/api/**',
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;

