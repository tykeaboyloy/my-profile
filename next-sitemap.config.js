const siteMetadata = require("./src/utils/siteMetaData");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  facebookurl: siteMetadata.facebook,
  twitterurl: siteMetadata.twitter,
  linkedinurl: siteMetadata.linkedin,
  githuburl: siteMetadata.github,
  generateRobotsTxt: true,
};
