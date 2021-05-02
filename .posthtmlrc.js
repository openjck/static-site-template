module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        GA_TRACKING_ID: process.env.GA_TRACKING_ID,
      },
    },
  },
};
