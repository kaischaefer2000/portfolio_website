import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navigation from "../components/navigation"

const IndexPage = () => (
  <>
    <Navigation/>
    <Layout>
      <Seo title="Home" />

    </Layout>
  </>
)

export default IndexPage
