import React from "react"
// import mono from "./monkey.png"
import styles from "./monkey_msg.module.css"
import mono from './monkey.png'
// console.log(mono)
export default props =>  <div className={styles.container}>
                        <img src={mono} alt="logo" />
                        <b className={styles.mono}>NUCLEAR WAR IS BAD FOR {props.msg}</b>
                      </div>