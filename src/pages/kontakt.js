import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navigation from "../components/navigation"

const KontaktPage = () => (
  <>
    <Navigation isHomePage={false} />
    <Layout>
      <Seo title="Kontakt" />
      <h1>Kontaktiere mich!</h1>
    </Layout>
  </>
)

export default KontaktPage
