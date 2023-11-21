/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mongabay.org",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "imgs.mongabay.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "mongabay-images.s3.amazonaws.com",
        port: "",
        pathname: "/staff/**",
      },
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
        port: "",
        pathname: "/64b51aeeecb8e747caaf118c/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-sprite-loader",
        },
        {
          loader: "svgo-loader",
          options: {
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    convertColors: { shorthex: false },
                    convertPathData: false,
                  },
                },
              },
            ],
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
