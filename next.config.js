const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/hooks",
      "@mantine/modals",
      "@mantine/notifications",
      "@mantine/spotlight",
      "@mantine/carousel",
      "@mantine/code-highlight",
      "@tabler/icons-react"
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 8192,
          fallback: "file-loader",
          publicPath: "/_next/static/fonts/",
          outputPath: "static/fonts/",
          name: "[name]-[hash].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
