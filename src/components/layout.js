import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Container from "./container"
import Toolbar from "./Toolbar/Toolbar"

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
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <Container>
            {/* <Link to={`/`}>
              <h3>{data.site.siteMetadata.title}</h3>
            </Link>
            <Link to={`/about/`}>{data.site.siteMetadata.author}</Link> */}
            {children}
          </Container>
        </main>
      </div>
    )}
  />
)
