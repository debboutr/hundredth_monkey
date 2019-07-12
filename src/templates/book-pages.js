import React from "react"
import { Link, graphql } from "gatsby"
import Monkey from "../components/monkey_msg"
import Layout from "../components/layout"
import style from "./book.css"

export default ({ data }) => {

  const textStyle = {
    textDecoration: 'none',
    color: 'black',
    fontFamily: 'Gentium Book Basic',
  }
  const post = data.markdownRemark
  let monkey
  if (post.frontmatter.monkey_msg !== '') {
    monkey = <Monkey msg={post.frontmatter.monkey_msg} />
  } else {
    monkey = <div></div>
  }
  const page = parseInt(post.frontmatter.next.split("-")[1])-1

  return (
    <Layout>
      <div>
          <div style={textStyle} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div style={{ display: 'flex' }}>
      <Link to={post.frontmatter.previous}>
      <div className="arrow_box_left" style={{ position:'absolute', 
                                          top: 100 , 
                                          left: 70,
                                          color: 'black',
                                          fontSize: '1.5rem',
                                          fontFamily: 'Gentium Book Basic',
                                          textAlign: "center",
                                          }}
                  
      >prev</div>
      </Link>
      <div style={{ textAlign: 'center', 
                  color: 'black',
                  flex: 1,
                  fontSize: '2rem',
                  fontFamily: 'Gentium Book Basic'}}>{ page }</div>
      <Link to={post.frontmatter.next}>
      <div className="arrow_box_right" style={{ position:'absolute', 
                                          top:100 , 
                                          right:70,
                                          color: 'black',
                                          fontSize: '1.5rem',
                                          fontFamily: 'Gentium Book Basic',
                                          textAlign: "center",
                                          }}
                  
      >next</div>
      </Link>
      </div>
      { monkey }
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
