module.exports = {
  siteMetadata: {
    title: `James Yoo`,
    description: `James' blog about software development, technology and investment`,
    author: `@jyoo`,
    siteUrl: "https://www.jyoo.dev",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: "/sitemap.xml",
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // exclude: [
        //   `/src/components/*`,
        //   `/src/images/*`,
        //   `/src/pages/404.js`,
        //   `/src/src/*`,
        // ],
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  slug
                }
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage, allMarkdownRemark }) => {
          let pages = []
          allSitePage.edges.map(edge => {
            pages.push({
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            })
          })
          // allMarkdownRemark.edges.map(edge => {

          //   console.log(edge.node.frontmatter.slug)
          //   pages.push({
          //     url: `${site.siteMetadata.siteUrl}/${edge.node.frontmatter.slug}`,
          //     changefreq: `daily`,
          //     priority: 0.7,
          //   })
          // })

          return pages
        },
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165380384-1",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
