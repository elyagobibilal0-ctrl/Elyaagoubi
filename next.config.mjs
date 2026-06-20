const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  },
  i18n: {
    locales: ["en", "fr", "ar"],
    defaultLocale: "en"
  }
};

export default nextConfig;
