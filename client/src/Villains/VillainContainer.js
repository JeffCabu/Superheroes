import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'
import VillainInfo from './VillainInfo'
// import PropTypes from 'prop-types'

class VillainContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    villain: undefined,
    loading: true,
    comments: undefined,
    text: undefined
  }

  componentDidMount () {
    const villainId = this.props.match.params.villainId
    this.loadVillainFromServer(villainId)
  }

  loadVillainFromServer = (id) => {
    $.ajax({
      url: `/api/villains/${id}`,
      method: 'GET'
    }).done((response) => {
      console.log(response)
      this.setState({villain: response.villain, loading: false, comments: response.villain.comments})
    })
  }

  submitComment = (e) => {
    e.preventDefault()
    const newComment = {text: this.state.text}
    $.ajax({
      url: `/api/villains/${this.props.match.params.villainId}/comments`,
      method: 'POST',
      data: newComment
    }).done((response) => {
      console.log(response)
      this.loadVillainFromServer(this.props.match.params.villainId)
      this.setState({text: ''})
    })
  }

  handleOnTextChange = (e) => this.setState({text: e.target.value})

  render () {
    return (
      <div>
        <h1>Villain container</h1>
        {
          !this.state.loading
            ? <VillainInfo villain={this.state.villain} comments={this.state.comments}
              submitComment={this.submitComment} handleOnTextChange={this.handleOnTextChange}
              text={this.state.text}
            />
            : 'Villain not home right now, please check in later'
        }
      </div>
    )
  }
}
export default withRouter(VillainContainer)
