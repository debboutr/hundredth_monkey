import React from "react"
import { Link } from "gatsby"
import Horizontal from "../slider"
import "./Toolbar.css"

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <Link to="/">
          <u>the hundredth monkey</u>
        </Link>
      </div>
      <div className="spacer">
        <Horizontal />
      </div>
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link to="/">About the Author</Link>
          </li>
          {/* <li>
            <a href="/">Users</a>
          </li> */}
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar
