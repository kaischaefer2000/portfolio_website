import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Welcome from "../components/welcome"
import Technologies from "../components/technologies"
import Characteristics from "../components/characteristics"


const IndexPage = () => (
  <>
    <Header isHome/>
    <Layout>
      <Seo title="Home" />
      <Welcome/>
      <Technologies/>
    </Layout>
    <Characteristics/>
  </>
)

export default IndexPage
