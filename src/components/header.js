import React from "react"
import HeaderImage from "./headerImage"
import Navigation from "./navigation"

const header = () => {
  return (
    <header>
      <HeaderImage />
      <Navigation  isHomePage={true}/>
    </header>
  )
}

export default header
