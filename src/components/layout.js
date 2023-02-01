import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

// basically the header
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul>
          <li><Link to="/coffee">curdled milk</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout