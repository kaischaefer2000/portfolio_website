import React from "react"
import Image from "./image"
import Button from "@mui/material/Button"
// import { MdWavingHand } from "@react-icons/all-files/fa/FaMdWavingHand";

const Navigation = () => {
  return (
    <nav className="flex flex-row">
      <div>
        <Image
          src="kai_schaefer_logo.png"
          alt="Kai Schäfer Web Developer Logo"
          className="w-24 m-4"
        />
      </div>
      <div className="flex flex-row items-center justify-end w-full">
        <Button
          style={{ color: "#964493" }}
          variant="text"
          className="mx-2 normal-case"
        >
          Home
        </Button>
        <Button
          style={{ color: "#964493" }}
          disableElevation={true}
          variant="text"
          className="mx-2 normal-case"
        >
          Portfolio
        </Button>
        <Button
          style={{ color: "#964493" }}
          variant="text"
          className="mx-2 normal-case"
        >
          Über mich
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#3753a0" }}
          className="mr-4 ml-2"
        //   startIcon={<MdWavingHand/>}
        >
          Sag hallo!
        </Button>
      </div>
    </nav>
  )
}

export default Navigation
