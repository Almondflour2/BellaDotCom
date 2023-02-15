/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `B.COM`,
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-mermaid`,
            options: {
              launchOptions: {
                executablePath: 'path/to/chrome/executable'
              },
              svgo: {
                plugins: [{ name: 'removeTitle', active: false }]
              },
              mermaidOptions: {
                theme: 'neutral',
                themeCSS: '.node rect { fill: #fff; }'
              }
            }
          }
        ]
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    }, //gatsby-source-filesystem requires configuring to get the path of the blog directory, and adds them to the data layer. 
    "gatsby-plugin-mdx",
  ], 
}
