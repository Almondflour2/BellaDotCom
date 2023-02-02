import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  hiddenText,
  hideli
} from './layout.module.css'
//use the Layout to automatically apply styles to the wherever you call it

// basically the header and page styling
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <p><Link to="/">Home</Link>&nbsp;//&nbsp;<Link to="/coffee">Best Energy Source for Coders</Link>&nbsp;//&nbsp;<Link to="/blueprint">Blueprints</Link></p>
        {/* hidden text feature... hopefully i can make this a reusable asset */}
        <p className={hiddenText}>developing with gatsby is easier than making...</p>
        <p className={hideli}>cheese!</p>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}



const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

export default Layout