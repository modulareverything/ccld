const postcssImport = require(`postcss-import`);
const stylelint = require(`stylelint`);
const tailwindCSS = require(`tailwindcss`);
const postCSS = require(`postcss-preset-env`);

module.exports = {
  plugins: [
    postcssImport({
      plugins: [stylelint],
    }),
    tailwindCSS('./tailwind.config.js'),
    postCSS({
      autoprefixer: { grid: true },
      features: {
        'nesting-rules': true,
      },
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    }),
  ],
};
