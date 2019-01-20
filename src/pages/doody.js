import React from "react"
import Header from "../components/header"
import Monkey from "../components/monkey_msg"

export default () => (
  <div style={{ color: `teal` }}>
    <Monkey msg="NUCLEAR WAR IS BAD FOR YOUR OVARIES!"/>
    <Header /> 
    <h1>About Gatsby</h1>
    <Monkey msg="NUCLEAR WAR IS BAD FOR YOUR PENISES!"/>

    <p>Such wow. Very React.</p>
    
  </div>
)