/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: { removeViewBox: false },
                    },
                  },
                  { name: "convertColors", params: { currentColor: true } },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

module.exports = nextConfig;