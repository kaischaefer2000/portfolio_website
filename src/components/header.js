import React from "react"
import { useEffect, useRef, useState } from "react"
import HeaderImage from "./headerImage"
import Navigation from "./navigation"

const Header = () => {
  const [navbarOpacity, setNavbarOpacity] = useState(0)
  const backgroundImageRef = useRef(null)
  const navBarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const backgroundHeight = backgroundImageRef.current.clientHeight
      const navBarHeight = navBarRef.current.clientHeight
      const delta = scrollY - backgroundHeight
      // Calculate the opacity based on the distance to the bottom of the image
      let opacity

      if (delta <= -navBarHeight) {
        opacity = 0
      } else if (delta > -navBarHeight) {
        opacity = 1
      }

      setNavbarOpacity(opacity)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header>
      <HeaderImage ref={backgroundImageRef} />
      <Navigation
        ref={navBarRef}
        isHomePage={true}
        navbarOpacity={navbarOpacity}
      />
    </header>
  )
}

export default Header
