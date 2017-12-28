import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from '../Components/CommentsList'
import CommentForm from '../Components/CommentForm'
import {
  Link
} from 'react-router-dom'

const VillainInfo = ({villain, comments, handleOnTextChange, text, submitComment}) => {
  return (
    <div>
      <div>
        <h3>Villain info</h3>
        <h4>{villain.name}</h4>
        <h4>From:{villain.universe} Universe</h4>
        <h4>Nemesis:{villain.nemesis ? villain.nemesis.name : 'no nemesis'}</h4>
      </div>
      <div>
        <img src={villain.img} />
      </div>
      <div>
        <h3>Comments</h3>
        <CommentsList comments={comments} />
      </div>
      <div>
        <CommentForm handleOnTextChange={handleOnTextChange}
          text={text} submitComment={submitComment}
        />
      </div>
      <div>
        <Link to={`/edit-villain/${villain._id}`}>Edit Villain</Link>
      </div>
    </div>
  )
}

VillainInfo.propTypes = {
  villain: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  submitComment: PropTypes.func.isRequired,
  handleOnTextChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default VillainInfo
