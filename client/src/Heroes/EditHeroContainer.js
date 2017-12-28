import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import EditHeroForm from './EditHeroForm'
import {
  withRouter
} from 'react-router-dom'

class EditHeroContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    name: undefined,
    superPower: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined,
    loading: true
  }

  componentDidMount () {
    this.loadHeroFromServer()
  }
  onNameChange = (e) => this.setState({name: e.target.value})
  onSuperPowerChange = (e) => this.setState({superPower: e.target.value})
  onImgChange = (e) => this.setState({img: e.target.value})
  onUniverseChange = (e) => this.setState({universe: e.target.value})
  onNemesisChange = (e) => this.setState({nemesis: e.target.value})

  loadHeroFromServer = (e) => {
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'GET'
    }).done((response) => {
      const {name, img, nemesis, universe, superPower} = response.hero
      this.setState({
        name,
        superPower,
        img,
        universe,
        nemesis,
        loading: false
      })
    })
  }

  submitHeroToServer = (e) => {
    e.preventDefault()
    const {name, img, universe, superPower, nemesis} = this.state
    const hero = {name, img, universe, superPower, nemesis}
    console.log('Hero Edit', hero)
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}`,
      method: 'PUT',
      data: hero
    }).done((response) => {
      console.log('RES from PUT', response)
      alert(`Hero ${response.hero.name} has been updated`)
      this.props.history.push(`/hero/${response.hero._id}`)
    })
  }
  render () {
    const {name, img, nemesis, universe, superPower} = this.state
    return (
      <div>
        {
          !this.state.loading
            ? <EditHeroForm
              name={name}
              img={img}
              nemesis={nemesis}
              universe={universe}
              superPower={superPower}
              onImgChange={this.onImgChange}
              onNameChange={this.onNameChange}
              onNemesisChange={this.onNemesisChange}
              onUniverseChange={this.onUniverseChange}
              onSuperPowerChange={this.onSuperPowerChange}
              submitHeroToServer={this.submitHeroToServer}
              villains={this.props.villains}
            />
            : <h2> Loading . . . </h2>
        }
      </div>
    )
  }
}

export default withRouter(EditHeroContainer)
