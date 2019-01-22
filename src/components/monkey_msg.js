import React from "react"
// import mono from "./monkey.png"
import styles from "./monkey_msg.module.css"
import mono from './monkey.png'
console.log(mono)
export default props =>  <div className={styles.container}>
                        <img src={mono} alt="logo" />
                        <div className={styles.mono}><b>{props.msg}</b></div>
                      </div>