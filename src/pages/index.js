import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { linkStyle } from '../components/layout'

const docLink = {
  text: "gatsby docs",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="flan"
        src="../images/flan.png"
      />
      <h1>Welcome to my Gatsby site!</h1>
      <ul>
      <li>
        <Link to="/coffee">Best Energy Source</Link>
      </li>
      <li>
        <Link to="/blueprint">What my real gatsby site will have</Link>
      </li>
      </ul>
      <br></br>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <a
        style={linkStyle}
        href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
      >
        {docLink.text}
      </a>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>b.com</title>
