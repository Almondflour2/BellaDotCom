import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  unhideBtn,
  hiddenLi,
  siteTitle
} from './layout.module.css'
//use the Layout to automatically apply styles to the wherever you call it


// basically the header and page styling
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <p><Link to="/">Home</Link>&nbsp;//&nbsp;
           <Link to="/coffee">Best Energy Source for Coders</Link>&nbsp;//&nbsp;
           <Link to="/blueprint">Blueprints</Link>&nbsp;//&nbsp;
           <Link to="/blog" className={navLinkText}>Blog</Link>
        </p>
        {/* hidden text feature... hopefully i can make this a reusable asset */}
        <p className={unhideBtn}>developing with gatsby is easier than making...</p>
        <p className={hiddenLi}>flan!</p>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout