module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "30em", // Roughly 480px
        "mantine-breakpoint-sm": "48em", // Roughly 768px
        "mantine-breakpoint-md": "64em", // Roughly 1024px
        "mantine-breakpoint-lg": "80em", // Roughly 1280px
        "mantine-breakpoint-xl": "90em", // Roughly 1440px
      },
    },
  },
};
