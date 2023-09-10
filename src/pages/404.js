import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Seite nicht gefunden." />
    <h1>404: This is not the page you are looking for.</h1>
  </Layout>
)

export default NotFoundPage
