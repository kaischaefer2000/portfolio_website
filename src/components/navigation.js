import React from "react"
import Button from "@mui/material/Button"
// import LanguageSwitch from "./languageSwitch"
import Image from "./image"
import { Link } from "gatsby"
import Modal from "@mui/material/Modal"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PropTypes from "prop-types"

const Navigation = React.forwardRef(({ isHomePage, navbarOpacity }, ref) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <nav
      ref={ref}
      className={`flex flex-row w-full z-50 ${
        isHomePage === true ? "fixed" : "realtive navColor"
      }`}
      style={{
        backgroundColor: `rgba(55, 83, 160, ${navbarOpacity})`,
        transition: "background-color 0.5s",
      }}
    >
      <div
        className="m-4 p-2 rounded-lg border border-transparent"
        style={{ backgroundColor: "rgba(256, 256, 256, 0.8)" }}
      >
        {/* <LanguageSwitch className="absolute" /> */}
        <Link to="/">
          <Image
            src="kai_schaefer_logo.png"
            alt="Kai Schäfer Web Developer Logo"
            className="w-10 sm:w-14"
          />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-end w-full p-4">
        <div className="hidden md:block">
          <Link to="/">
            <Button
              style={{
                textTransform: "none",
                color: "#1F2937",
                fontWeight: 600,
              }}
              variant="text"
              className="mx-1"
            >
              Home
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button
              style={{
                textTransform: "none",
                color: "#1F2937",
                fontWeight: 600,
              }}
              disableElevation={true}
              variant="text"
              className="mx-1"
            >
              Portfolio
            </Button>
          </Link>
          <Link to="/ueber-mich">
            <Button
              style={{
                textTransform: "none",
                color: "#1F2937",
                fontWeight: 600,
              }}
              variant="text"
              className="mx-1 "
            >
              Über mich
            </Button>
          </Link>
          <Link to="/kontakt">
            <Button
              variant="outlined"
              style={{
                borderColor: "#f3b59e",
                color: "#f3b59e",
                marginLeft: "0.5rem",
              }}
              className="mr-4"
            >
              Sag hallo!
            </Button>
          </Link>
        </div>
        <div className="border rounded-lg md:hidden">
          <MenuIcon
            onClick={handleOpen}
            className="md:hidden m-1"
            style={{ color: "#fff" }}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="bg-white m-5 p-5 h-auto flex flex-col rounded justify-items-start">
          <CloseIcon className="absolute right-10" onClick={handleClose} />
          <Link to="/" style={{ color: "#3753a0" }} className="ml-2 my-2">
            Home
          </Link>
          <Link
            to="/portfolio"
            style={{ color: "#3753a0" }}
            className="ml-2 my-2"
          >
            Portfolio
          </Link>
          <Link
            to="/ueber-mich"
            style={{ color: "#3753a0" }}
            className="ml-2 my-2"
          >
            Über mich
          </Link>
          <Link to="/kontakt">
            <Button
              variant="contained"
              style={{
                marginTop: "0.5rem",
                marginLeft: "0.5rem",
              }}
            >
              Sag hallo!
            </Button>
          </Link>
        </div>
      </Modal>
    </nav>
  )
})

Navigation.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
}

export default Navigation
