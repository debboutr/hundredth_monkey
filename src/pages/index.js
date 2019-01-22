import React from "react"
import { Link } from "gatsby"
import Monkey from "../components/monkey_msg"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (

<Layout> 
  <Link to="/contact/">Contact</Link> 
  <Header headerText="The hundredth monkey phenomenon!" />
  <p>What a world.</p>
  <Monkey msg="NUCLEAR WAR IS BAD FOR YOUR OVARIES!"/>
</Layout>
)

          