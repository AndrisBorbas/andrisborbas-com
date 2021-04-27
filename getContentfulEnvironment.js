/* eslint-disable import/no-extraneous-dependencies */
const contentfulManagement = require("contentful-management");
const dotenv = require("dotenv");
/* eslint-enable import/no-extraneous-dependencies */

dotenv.config({ path: "./.env.development.local" });

module.exports = function getContentfulEnvironment() {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: process.env.NODE_CONTENTFUL_PERSONAL_ACCESS_TOKEN,
	});

	return contentfulClient
		.getSpace(process.env.NODE_CONTENTFUL_SPACE_ID)
		.then((space) =>
			space.getEnvironment(process.env.NODE_CONTENTFUL_ENVIRONMENT),
		);
};
