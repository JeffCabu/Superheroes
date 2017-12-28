import React from 'react'
import PropTypes from 'prop-types'

const style = {
  textBox: {
    resize: 'none',
    width: 300
  }
}
const CommentForm = ({handleOnTextChange, text, submitComment}) => {
  return (
    <form>
      <textarea placeholder='Enter a Comment' style={style.textBox} rows='4' onChange={handleOnTextChange} value={text} />
      <button type='button' onClick={submitComment}>Comment</button>
    </form>
  )
}

CommentForm.propTypes = {
  text: PropTypes.string.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired
}

export default CommentForm
