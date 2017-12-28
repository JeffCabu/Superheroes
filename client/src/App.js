import React, {Component} from 'react'

import Heroes from './Heroes/Heroes'
import CreateHeroContainer from './Heroes/CreateHeroContainer'
import HeroContainer from './Heroes/HeroContainer'
import EditHeroContainer from './Heroes/EditHeroContainer'

import VillainContainer from './Villains/VillainContainer'
import Villains from './Villains/Villains'
import CreateVillainContainer from './Villains/CreateVillainContainer'
import EditVillainContainer from './Villains/EditVillainContainer'

import Home from './Pages/Home'
import Nav from './Components/Nav'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state ={
    heroes: undefined,
    villains: undefined
  }

  componentDidMount = () => {
    this.loadHeroesFromServer()
    this.loadVillainsFromServer()
  }

  loadHeroesFromServer = () => {
    $.ajax({
      url: '/api/heroes',
      method: 'GET'
    }).done((response) => {
      console.log('Load heroes', response)
      this.setState({heroes: response.superHeroes})
    })
  }
  deleteHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadHeroesFromServer()
    })
  }
  showUniqueHero = (hero) => {
    $.ajax({
      url: `/api/heroes/${hero._id}`,
      method: 'GET'
    }).done(response => {
      console.log(response)
      const hero = response.hero
      alert(`${hero.name}, SuperPower: ${hero.superPower}, Nemesis: ${hero.nemesis}`)
    })
  }

  loadVillainsFromServer = () => {
    $.ajax({
      url: '/api/villains/',
      method: 'GET'
    }).done((response) => {
      this.setState({villains: response.villains})
    })
  }
  deleteVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadVillainsFromServer()
    })
  }
  showUniqueVillain = (villain) => {
    $.ajax({
      url: `/api/villains/${villain._id}`,
      method: 'GET'
    }).done(response => {
      console.log(response)
      const villain = response.villain
      alert(`${villain.name}, Nemesis:${villain.nemesis}`)
    })
  }

  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          {
            this.state.villains
              ? <Route path='/create-hero' render={() => <CreateHeroContainer villains={this.state.villains} loadHeroesFromServer={this.loadHeroesFromServer} />} />
              : 'No villains'
          }

          {
            this.state.heroes
              ? <Route path='/heroes' render={() => <Heroes showUniqueHero={this.showUniqueHero} deleteHero={this.deleteHero} heroes={this.state.heroes} />} />
              : 'Villains won!'
          }

          <Route path='/hero/:heroId' render={() => <HeroContainer />} />

          {
            this.state.villains
              ? <Route path='/edit-hero/:heroId' render={() => <EditHeroContainer villains={this.state.villains} />} />
              : 'Villains won!'
          }

          {
            this.state.heroes
              ? <Route path='/create-villain' render={() => <CreateVillainContainer heroes={this.state.heroes} loadVillainsFromServer={this.loadVillainsFromServer} />} />
              : 'No Heroes'
          }

          {
            this.state.villains
              ? <Route path='/villains' render={() => <Villains showUniqueVillain={this.showUniqueVillain} deleteVillain={this.deleteVillain} villains={this.state.villains} />} />
              : 'Villains have all been captured!'
          }
          <Route path='/villain/:villainId' render={() => <VillainContainer />} />
          {
            this.state.heroes
              ? <Route path='/edit-villain/:villainId' render={() => <EditVillainContainer heroes={this.state.heroes} />} />
              : 'No heroes left. MUhahahaha'
          }
        </div>
      </Router>

    )
  }
}

export default App
