module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID,
      },
    },
  },
};
