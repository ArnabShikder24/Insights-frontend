/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true, // Consider enabling in development
    },
    // Optional: Configure Webpack to handle problematic modules
    webpack: (config, { isServer }) => {
        if (isServer) {
            // Ensure server-side code doesn't bundle browser-specific modules
            config.resolve.fallback = {
                ...config.resolve.fallback,
                // Add fallbacks for modules that may cause issues
                fs: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },
};

module.exports = nextConfig;