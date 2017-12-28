import React from 'react'
import PropTypes from 'prop-types'

const CardSubtitle = ({title, trait}) => {
  return (
    <div>
      <p>{title} {trait}</p>
    </div>
  )
}

CardSubtitle.propTypes = {
  title: PropTypes.object.isRequired,
  trait: PropTypes.object.isRequired
}

export default CardSubtitle
