import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import HeroInfo from './HeroInfo'

class HeroContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }
  state = {
    hero: undefined,
    comments: undefined,
    text: undefined
  }
  componentDidMount () {
    const heroId = this.props.match.params.heroId
    this.loadHero(heroId)
  }

  loadHero = (id) => {
    $.ajax({
      url: `/api/heroes/${id}`,
      method: 'GET'
    }).done((response) => {
      this.setState({hero: response.hero, comments: response.hero.comments})
    })
  }

  submitComment = (e) => {
    e.preventDefault()
    const newComment = {text: this.state.text}
    $.ajax({
      url: `/api/heroes/${this.props.match.params.heroId}/comments`,
      method: 'POST',
      data: newComment
    }).done((response) => {
      this.loadHero(this.props.match.params.heroId)
      this.setState({text: ''})
    })
  }

  handleOnTextChange = (e) => this.setState({text: e.target.value})

  render () {
    return (
      <div>
        {
          this.state.hero
            ? <HeroInfo hero={this.state.hero} comments={this.state.comments}
              submitComment={this.submitComment} handleOnTextChange={this.handleOnTextChange}
              text={this.state.text} />
            : 'Hero has not been found'
        }
      </div>
    )
  }
}

export default withRouter(HeroContainer)
