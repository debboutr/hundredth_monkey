import React from "react"
import { Link, graphql } from "gatsby"
// import Monkey from "../components/monkey_msg"
import Layout from "../components/layout"

export default ({ data }) => {
  // console.log(data)

  const textStyle = {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Gentium Book Basic',
  }
  const post = data.markdownRemark
  console.log(post.frontmatter)
  // console.log(parseInt(post.frontmatter.next.split("-")[1])-1)
  // console.log(post.html)
  return (
    <Layout>
      <div>
        <Link to={post.frontmatter.next} style={{ textDecoration: 'none' }}>
          <div style={textStyle} dangerouslySetInnerHTML={{ __html: post.html }} />
          {/* <Monkey msg="YOUR TESTICLES!" /> */}
        </Link>
      </div>
      <Link to={post.frontmatter.previous}>previous{"<<<"}</Link>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        previous
        next
        monkey_msg
      }
    }
  }
`
