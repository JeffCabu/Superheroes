import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import EditVillainForm from './EditVillainForm'
import {
  withRouter
} from 'react-router-dom'

class EditVillainContainer extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  state = {
    name: undefined,
    img: undefined,
    universe: undefined,
    nemesis: undefined,
    loading: true
  }

  componentDidMount () {
    this.loadVillainFromServer()
  }
  onNameChange = (e) => this.setState({name: e.target.value})
  onImgChange = (e) => this.setState({img: e.target.value})
  onUniverseChange = (e) => this.setState({universe: e.target.value})
  onNemesisChange = (e) => this.setState({nemesis: e.target.value})

  loadVillainFromServer = (e) => {
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}`,
      method: 'GET'
    }).done((response) => {
      const {name, img, nemesis, universe} = response.villain
      this.setState({
        name,
        img,
        universe,
        nemesis,
        loading: false
      })
    })
  }

  submitVillainToServer = (e) => {
    e.preventDefault()
    const {name, img, universe, nemesis} = this.state
    const villain = {name, img, universe, nemesis}
    console.log('Villain Edit', villain)
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}`,
      method: 'PUT',
      data: villain
    }).done((response) => {
      console.log('RES from PUT', response)
      this.props.history.push(`/villain/${response.villain._id}`)
    })
  }
  render () {
    const {name, img, nemesis, universe} = this.state
    return (
      <div>
        {
          !this.state.loading
            ? <EditVillainForm
              name={name}
              img={img}
              nemesis={nemesis}
              universe={universe}
              onImgChange={this.onImgChange}
              onNameChange={this.onNameChange}
              onNemesisChange={this.onNemesisChange}
              onUniverseChange={this.onUniverseChange}
              submitVillainToServer={this.submitVillainToServer}
              heroes={this.props.heroes}
            />
            : <h2> Loading . . . </h2>
        }
      </div>
    )
  }
}

export default withRouter(EditVillainContainer)
