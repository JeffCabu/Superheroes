import React from 'react'

const style = {
  jumbotron: {
    border: '4px black solid',
    borderRadius: 15,
    textAlign: 'center'
  }
}
const Home = () => {
  return (
    <div style={style.jumbotron}>
      <h1>Welcome to the home of Heroes and Villains</h1>
    </div>
  )
}

export default Home
