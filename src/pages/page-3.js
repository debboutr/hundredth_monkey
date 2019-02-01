import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "./dedication.module.css"

export default () => (
  <Layout style={{ color: `teal` }} page="1">
    <Link to="/page-4" style={{ textDecoration: 'none' }}>
      <h1 className={styles.ded}>
        This book is dedicated to the Dinosaurs, who mutely warn us that a
        species which cannot adapt to changing conditions will become extinct.
      </h1>
    </Link>
  </Layout>
)
