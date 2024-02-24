const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  distDir: "build",
});

module.exports = withNextra({
  images: {
    unoptimized: true,
  },
});
