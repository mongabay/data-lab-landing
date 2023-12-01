/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
