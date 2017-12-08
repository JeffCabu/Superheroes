import React, { Component } from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types'

import {
  withRouter
} from 'react-router-dom'

class CreateHeroContainer extends Component {
  state = {
    name: undefined,
    superPower: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined
  }

  static propTypes = {
    loadHeroesFromServer: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }

  onNameChange = (e) => this.setState({ name: e.target.value })

  onSuperPowerChange = (e) => this.setState({superPower: e.target.value})

  onImageChange = (e) => this.setState({img: e.target.value})

  onUniverseChange = (e) => this.setState({universe: e.target.value})

  onNemesisChange = (e) => this.setState({nemesis: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, superPower, img, universe, nemesis} = this.state
    const hero = {name, superPower, img, universe, nemesis}
    $.ajax({
      url: '/api/heroes',
      method: 'POST',
      data: hero
    }).done((response) => {
      this.props.loadHeroesFromServer()
      this.props.history.push('/heroes')
    })
  }

  render () {
    return (
      <div>
        <h3>Create Hero</h3>
        <form>
          <div>
            <label>Name</label>
            <input type='text' placeholder='Charater Name' onChange={this.onNameChange} />
          </div>
          <div>
            <label>SuperPower</label>
            <input type='text' placeholder='Super Power' onChange={this.onSuperPowerChange} />
          </div>
          <div>
            <label>Image</label>
            <input type='text' placeholder='Image' onChange={this.onImageChange} />
          </div>
          <div>
            <label>Universe</label>
            <input placeholder='Universe' onChange={this.onUniverseChange} />
          </div>
          <div>
            <label>Nemesis</label>
            <input placeholder='Nemesis' onChange={this.onNemesisChange} />
          </div>
          <button type='button' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateHeroContainer)
