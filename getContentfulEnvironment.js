const contentfulManagement = require('contentful-management');

const dotenv = require('dotenv');

dotenv.config();

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.NODE_CONTENTFUL_PERSONAL_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.NODE_CONTENTFUL_SPACE_ID)
    .then((space) =>
      space.getEnvironment(process.env.NODE_CONTENTFUL_ENVIRONMENT),
    );
};
