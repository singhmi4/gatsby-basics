import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <h1>This is our blogs page</h1>
      <div className={styles.page}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          maiores quas culpa mollitia id unde ipsum alias ut quibusdam earum
          tempore aut, ratione cum adipisci?
        </p>
      </div>
    </Layout>
  )
}

export default blog
