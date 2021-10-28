import React from "react"
import Image from "./image"
import { Button } from "@mui/material"
import { Link } from "gatsby"

const Welcome = () => {
  return (
    <>
      <div>
        <h1>.</h1>
      </div>
      <div
        style={{ paddingTop: "55vw" }}
        className="pb-12 flex flex-col md:flex-row -mt-14 md:-mt-0"
      >
        <div className="w-full md:w-1/3 px-10 sm:px-36 py-14 md:p-0">
          <Image
            src="profile.jpg"
            alt="Kai Schäfer Freelancer Würzburg"
            className="border-5 border-transparent rounded-lg shadow-2xl"
          />
        </div>
        <div className="text-center md:text-left pl-2 pr-2 md:pr-0 md:pl-16 w-full md:w-2/3">
          <h1 id="indexH1" style={{ lineHeight: "1.5em" }}>
            Hi, ich bin Kai :) <br />
            Freelance Frontend Entwickler aus Würzburg
          </h1>
          <Button
            variant="contained"
            style={{ backgroundColor: "#3753a0", textTransform: "none" }}
            className="mt-5 md:mt-0"
          >
            <Link to="/portfolio">Mein Portfolio</Link>
          </Button>
          <Button
            variant="outlined"
            style={{
              color: "#3753a0",
              borderColor: "#3753a0 ",
              marginLeft: "0.35rem",
              textTransform: "none",
            }}
            className="mt-5 md:mt-0 ml-1 sm:ml-3"
          >
            <Link to="ueber-mich">Mehr über mich</Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Welcome
