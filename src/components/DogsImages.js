import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export default function DogsImages(props) {
  const { images } = props
  return (
    <div>
      <h1>Images for {props.breed}</h1>
      <div>
        {images ? images.map(url => <img key={url} src={url} alt="images" />) : "Loading..."}
      </div>
      <Link to="/dogslist">Go back</Link>
    </div>
  )
}

DogsImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}