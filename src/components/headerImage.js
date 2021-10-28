import React from "react"
import BackgroundImage from "../images/header_bg.jpg"

const HeaderImage = () => {
  return (
    <img
      src={BackgroundImage}
      alt="Kai Schäfer Web Developer Logo"
      className="w-full absolute "
      style={{
        boxShadow:
          "0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
      }}
    />
  )
}

export default HeaderImage
