import React from 'react'
import PropTypes from 'prop-types'

const style = {
  container: {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 15
  }
}
const Button = ({handleClick, children}) => {
  return (
    <button style={style.container} onClick={handleClick}>
      {children}
    </button>
  )
}
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}
export default Button
