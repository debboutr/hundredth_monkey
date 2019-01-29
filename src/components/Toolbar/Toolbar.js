import React from "react"
import { Location } from "@reach/router"
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
        <Location>
          {({ location }) => {
            // console.log('from toolbar ' + location.pathname.split('-').pop())
            
            return <Horizontal path={parseInt(location.pathname.split('-').pop())} />
          }}
        </Location>
        
      </div>
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link to="/">ken keyes, jr.</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar
