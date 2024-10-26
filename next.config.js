module.exports = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
};
