import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from '../Components/CommentsList'
import CommentForm from '../Components/CommentForm'
import {
  Link
} from 'react-router-dom'

const style = {
  container: {
    background: 'grey',
    color: 'blue',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  img: {
    width: '50%',
    height: '50%'
  }

}
const HeroInfo = ({hero, comments, submitComment, handleOnTextChange, text}) => {
  return (
    <div style={style.container}>
      <div>
        <h3>Character: {hero.name}</h3>
        <p>From: {hero.universe} Universe</p>
        <p>Superpower: {hero.superPower}</p>
        <p>Nemesis: <b>{hero.nemesis ? hero.nemesis.name : 'no nemesis'}</b></p>
      </div>
      <div>
        <img style={style.img} src={hero.img} />
      </div>
      <div>
        <h3>Comments</h3>
        <CommentsList comments={comments} />
      </div>
      <CommentForm
        handleOnTextChange={handleOnTextChange}
        text={text}
        submitComment={submitComment}
      />
      <div>
        <Link to={`/edit-hero/${hero._id}`}>Edit Hero</Link>
      </div>
    </div>
  )
}

HeroInfo.propTypes = {
  hero: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default HeroInfo
