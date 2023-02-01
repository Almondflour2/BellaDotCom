import * as React from 'react'
import Layout from '../components/layout'

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

const CoffeePage = () => {
  return (
    <Layout style={pageStyles}>
      <h1>Coffee</h1>
      <p>Coffee is delicious. Way better than drinking energy drinks.</p>
    </Layout>
  )
}

export const Head = () => <title>Coffee</title>

export default CoffeePage