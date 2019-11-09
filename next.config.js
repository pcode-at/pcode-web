const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withPlugins([
  [
    optimizedImages,
    {
      inlineImageLimit: -1
      /* config for next-optimized-images */
    }
  ]

  // your other plugins here
]);

// TODO: for usage with preact, the nextjs plugin has to be updated: https://github.com/zeit/next-plugins/issues/554
// const withPreact = require("@zeit/next-preact");

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
// });

// module.exports = withPreact();
