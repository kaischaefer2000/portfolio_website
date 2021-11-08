import React from "react"
import SingleTechnologie from "./singleTechnologie"
import ReactLogo from "../images/technologies/React.svg"
import GatsbyLogo from "../images/technologies/Gatsby.svg"
import FirebaseLogo from "../images/technologies/Firebase.svg"
import MaterialUILogo from "../images/technologies/MaterialUI.svg"
import TailwindLogo from "../images/technologies/Tailwind.svg"
import JSLogo from "../images/technologies/JS.svg"


const Technologies = () => {
  const technologies = [
    {
      name: "React JS",
      image: ReactLogo,
    },
    {
      name: "Gatsby JS",
      image: GatsbyLogo,
    },
    {
      name: "Firebase",
      image: FirebaseLogo,
    },
    {
      name: "Material UI",
      image: MaterialUILogo,
    },
    {
      name: "Tailwind",
      image: TailwindLogo,
    },

    {
      name: "Java Script",
      image: JSLogo,
    },
  ]

  const Techs = technologies.map(tech => {
    return (
      <SingleTechnologie key={tech.name} name={tech.name} image={tech.image} />
    )
  })

  return (
    <div className="my-20 py-5 flex flex-col">
      <div className="md:w-2/3">
        <h2>
          Mein Werkzeugkasten 
        </h2>
        <p className="text-sm">
          Mit diesen Technologien entwickle ich ansprechende und leistungsstarke Anwendungen fürs Web. Sie alle sind höchstmodern und aktuell sehr gefragt.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly md:justify-between px-0 mt-5">{Techs}</div>
    </div>
  )
}

export default Technologies
