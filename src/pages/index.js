import React from "react"
import { Link } from "gatsby"
import Monkey from "../components/monkey_msg"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Link to="/page-1/" title="click to begin!">
      <Header headerText="The hundredth monkey phenomenon!" />
    <h3>There is no cure for nuclear war -- ONLY PREVENTION</h3>
    <Monkey msg="FOR MONKEYS!" />
    </Link>
  </Layout>
)
