import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { MDXRenderer } from "gatsby-plugin-mdx"


//we are creating a dynamic list of our blog posts!
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
    {
      data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))
    }
  </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          title
          date(formatString: "dddd MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`


export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage