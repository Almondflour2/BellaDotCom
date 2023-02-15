import * as React from 'react'
import Seo from '../../components/seo'
import Layout from '../../components/layout'

const BlogPost = () => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
      <p> jimmy johns </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost