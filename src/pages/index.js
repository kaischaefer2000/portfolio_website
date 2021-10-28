import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Welcome from "../components/welcome"


const IndexPage = () => (
  <>
    <Header isHome/>
    <Layout>
      <Seo title="Home" />
      <Welcome/>
    </Layout>
  </>
)

export default IndexPage
