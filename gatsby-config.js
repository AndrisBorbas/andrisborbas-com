const siteMetadata = {
  name: "Andris Borbas's personal site",
  description: "Andris Borbas's personal site.",
};

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staticImages`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        ...siteMetadata,
        display: 'minimal-ui',
        theme_color: '#3c4b67',
        background_color: '#1A202C',
        icon: 'src/assets/favicon.png',
        lang: 'en-US',
        start_url: '/',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
