import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    border: '3px red solid',
    background: 'silver',
    width: 500
  }
}
const CommentCard = ({text}) => {
  return (
    <div style={style.container}>
      <p>{text}</p>
    </div>
  )
}

CommentCard.propTypes = {
  text: PropTypes.array.isRequired
}

export default CommentCard
