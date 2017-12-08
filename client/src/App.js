import React, {Component} from 'react'
import Heroes from './Heroes'
import CreateHeroContainer from './CreateHeroContainer'
import Home from './Home'
import Nav from './Nav'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state ={
    heroes: undefined
  }

  componentDidMount = () => {
    this.loadHeroesFromServer()
  }

  loadHeroesFromServer = () => {
    $.ajax({
      url: '/api/heroes',
      method: 'GET'
    }).done((response) => {
      this.setState({heroes: response.superHeroes})
    })
  }

  render () {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/create-hero' render={() => <CreateHeroContainer loadHeroesFromServer={this.loadHeroesFromServer} />} />
          {
            this.state.heroes
              ? <Route path='/heroes' render={() => <Heroes heroes={this.state.heroes} />} />
              : 'Villans won!'
          }
        </div>
      </Router>

    )
  }
}

export default App
