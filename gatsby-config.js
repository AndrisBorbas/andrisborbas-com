const siteMetadata = {
  name: "Andris Borbas's personal site",
  description: "Andris Borbas's personal site.",
  siteUrl: 'https://andrisborbas.com',
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://andrisborbas.com',
        sitemap: '',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-typescript',
  ],
};
