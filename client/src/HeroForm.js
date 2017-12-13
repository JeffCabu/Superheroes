import React from 'react'
import PropTypes from 'prop-types'

const HeroForm = ({onNameChange, onSuperPowerChange, onImageChange, onUniverseChange, onNemesisChange, handleSubmit}) => {
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type='text' placeholder='Charater Name' onChange={onNameChange} />
        </div>
        <div>
          <label>SuperPower</label>
          <input type='text' placeholder='Super Power' onChange={onSuperPowerChange} />
        </div>
        <div>
          <label>Image</label>
          <input type='text' placeholder='Image' onChange={onImageChange} />
        </div>
        <div>
          <label>Universe</label>
          <input placeholder='Universe' onChange={onUniverseChange} />
        </div>
        <div>
          <label>Nemesis</label>
          <input placeholder='Nemesis' onChange={onNemesisChange} />
        </div>
        <button type='button' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

HeroForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onSuperPowerChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
export default HeroForm
