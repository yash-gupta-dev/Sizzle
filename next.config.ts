/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.svg": [
        {
          condition: {
            not: { path: /gradient\.svg$/ },
          },
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
                    "prefixIds",
                    { name: "convertColors", params: { currentColor: true } },
                  ],
                },
              },
            },
          ],
          as: "*.js",
        },
        {
          condition: {
            path: /gradient\.svg$/,
          },
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
                  ],
                },
              },
            },
          ],
          as: "*.js",
        },
      ],
    },
  },
};

module.exports = nextConfig;