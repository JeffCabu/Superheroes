import React from 'react'

const style = {
  container: {
    border: 'blue solid 2px'
  }
}

const CardHeader = ({name, img}) => {
  return (
    <div>
      <div style={style.container}>
        <h4>{name}</h4>
        <img src={img} />
      </div>
    </div>
  )
}

// CardHeader.propTypes = {
//   name:
//   img:
// }

export default CardHeader
