import React from "react"
// import mono from "./monkey.png"
import styles from "./monkey_msg.module.css"
import mono from '../pages/monkey.png';

export default props =>  <div className={styles.container}>
                        <img src={mono} className="App-logo" alt="logo" />
                        <div className={styles.mono}><b>{props.msg}</b></div>
                      </div>