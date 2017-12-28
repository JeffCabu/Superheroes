import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '1px solid black'
  }
}

const CommentsList = ({comments}) => {
  return (
    <div style={style.container}>
      {
        comments && comments.length > 0
          ? comments.map(comment => {
            return <CommentCard key={comment._id} text={comment.text} />
          })
          : <p>No Comments</p>
      }
    </div>
  )
}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentsList
