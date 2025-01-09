/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Match all routes
                source: '/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000',
                    },
                ],
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https', // Chỉ hỗ trợ https
                hostname: '*',     // Tất cả các tên miền
                pathname: '**',    // Tất cả đường dẫn
              },
              {
                protocol: 'http', // Thêm hỗ trợ http
                hostname: '*',
                pathname: '**',
              },
        ],
    },
};

export default nextConfig;
