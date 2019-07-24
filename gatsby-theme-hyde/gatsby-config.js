// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/gatsby-theme-blog/components/layout`)
      }
    }
  ]
};
