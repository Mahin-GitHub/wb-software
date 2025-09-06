/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wbsoft.work', 
                port: '', 
                pathname: '/**', 
            },
           
        ],
    },
};

export default nextConfig;
