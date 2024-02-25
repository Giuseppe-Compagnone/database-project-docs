const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = {
  distDir: "out",
  ...withNextra({
    images: {
      unoptimized: true,
    },
    i18n: {
      locales: ["en", "it"],
      defaultLocale: "en",
      localeDetection: false,
    },
  }),
};
