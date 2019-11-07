const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

// TODO: for usage with preact, the nextjs plugin has to be updated: https://github.com/zeit/next-plugins/issues/554
// const withPreact = require("@zeit/next-preact");

// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"]
// });

// module.exports = withPreact();
