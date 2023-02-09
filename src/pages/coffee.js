import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

//block scoped constant to define the look of the page
const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

//this is the body of the page. it is written in HTML. 
const CoffeePage = () => {
  return (
    <Layout style={pageStyles}>
      <h1>Coffee</h1>
      <p>Coffee is delicious. Way better than drinking energy drinks.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="COFFE" />
//export declaration allows other programs to use it with the import 
export default CoffeePage