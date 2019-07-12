import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import Container from "./container"
import Toolbar from "./Toolbar/Toolbar"
import mono from './title_monkey.png'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hundredth Monkey</title>
          <link rel="shortcut icon" type="image/png" href={mono} />
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Toolbar />
        <main style={{ marginTop: "64px" }}>
          <Container>{children}</Container>
        </main>
      </div>
    )}
  />
)
