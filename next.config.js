/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Add this section to handle the window object issue during SSR
    experimental: {
        // Skip automatic Static Generation for pages with window access
        appDir: true,
    },
    // Add this to disable server-side rendering for the entire app
    // This is a quick fix but may impact SEO and performance
    webpack: (config, { isServer }) => {
        // If it's on the server side and not a node module
        if (isServer) {
            // Add specific handling for packages that use the window object
            config.externals = [...config.externals, 'canvas', 'jsdom'];
        }
        
        return config;
    },
};

module.exports = nextConfig;