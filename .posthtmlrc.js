// Make environment variables available to this configuration file
//
// https://github.com/parcel-bundler/parcel/issues/1209#issuecomment-891760840
require("dotenv").config();

module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        GA_TRACKING_ID: process.env.GA_TRACKING_ID,
      },
    },
  },
};
