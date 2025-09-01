const themeDir = __dirname + "/../../../";

module.exports = {
  plugins: [
    require("postcss-import")({
      path: [themeDir],
    }),
    require("tailwindcss")(`${themeDir}assets/assets/js/tailwind.config.js`),
    require("autoprefixer")({
      path: [themeDir],
    }),
    // Add cssnano in production builds to minify imported CSS (e.g., Font Awesome)
    ...(process.env.NODE_ENV === 'production' || process.env.HUGO_ENV === 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : []),
  ],
};
