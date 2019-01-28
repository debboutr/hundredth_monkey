import React from "react"
import { Link } from "gatsby"
import Monkey from "../components/monkey_msg"

export default () => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <h1>This is a 404</h1>
          Back to Home
        </Link>
      </div>
      <Link to="/">
        <Monkey msg="YOUR NAVIGATION" />
      </Link>
    </React.Fragment>
  )
}
