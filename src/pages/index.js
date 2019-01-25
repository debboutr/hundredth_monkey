import React from "react"
import { Link } from "gatsby"
import Monkey from "../components/monkey_msg"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Link to="/page-1/">
      <Header headerText="The hundredth monkey phenomenon!" />
    </Link>
    <Monkey msg="FOR MONKEYS!" />
  </Layout>
)
