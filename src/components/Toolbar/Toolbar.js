import React from "react"
import Horizontal from "../slider"
import "./Toolbar.css"

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <a href="/">
          <u>the hundredth monkey</u>
        </a>
      </div>
      <div className="spacer"><Horizontal /></div>
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="/">About the Author</a>
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
