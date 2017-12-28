import React from 'react'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    display: 'flex',
    border: 'solid black 2px',
    justifyContent: 'space-around'
  }
}
const Nav = () =>
  <nav style={style.container}>
    <div>
      <Link to='/'>Home</Link>
    </div>
    <div>
      <Link to='/heroes'>Heroes</Link>
    </div>
    <div>
      <Link to='/create-hero'>Create a Hero</Link>
    </div>
    <div>
      <Link to='/villains'>Villains</Link>
    </div>
    <div>
      <Link to='/create-villain'>Create a Villain</Link>
    </div>
  </nav>

export default Nav
