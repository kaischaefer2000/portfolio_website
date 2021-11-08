import React from "react"
import PropTypes from 'prop-types'

const SingleTechnologie = ({name, image}) => {
  return (
    <div className="bg-gray-100 rounded px-5 pt-5 mb-5 shadow-md">
      <img src={image} alt="" className="w-20 h-20"></img>
      <h4 className="text-center">{name}</h4>
    </div>
  )
}

SingleTechnologie.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export default SingleTechnologie
