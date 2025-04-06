/** @type {import('next').NextConfig} */
import redirects from "./src/app/redirects.js";

const nextConfig = {
    async rewrites() {
        return redirects;
    },
};

export default nextConfig;
