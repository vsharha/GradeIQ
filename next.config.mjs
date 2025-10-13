/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
        return [
            {
                source: '/app',
                destination: '/app/assignments',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
