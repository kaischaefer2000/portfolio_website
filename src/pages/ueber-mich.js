import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navigation from "../components/navigation"

const AboutPage = () => (
  <>
    <Navigation isHomePage={false} />
    <Layout>
      <Seo title="Home" />
      <h1>Über mich</h1>
    </Layout>
  </>
)

export default AboutPage
