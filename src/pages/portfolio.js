import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navigation from "../components/navigation"

const PortfolioPage = () => (
  <>
    <Navigation isHomePage={false} />
    <Layout>
      <Seo title="Home" />
      <h1>Mein Portfolio</h1>
    </Layout>
  </>
)

export default PortfolioPage
