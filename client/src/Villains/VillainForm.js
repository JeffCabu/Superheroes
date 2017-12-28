import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Components/Button'

const VillainForm = ({onNameChange, onImageChange, onUniverseChange, onNemesisChange, handleSubmit, heroes}) => {
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type='text' placeholder='Charater Name' onChange={onNameChange} />
        </div>
        <div>
          <label>Image</label>
          <input type='text' placeholder='Image' onChange={onImageChange} />
        </div>
        <div>
          <label>Universe</label>
          <input type='text' placeholder='Universe' onChange={onUniverseChange} />
        </div>
        <div>
          <label>Nemesis</label>
          <input type='text' placeholder='Nemesis' onChange={onNemesisChange} />
          <select onChange={onNemesisChange}>
            <option>Has no nemesis</option>
            {
              heroes.map(hero => {
                return <option value={hero._id}>{hero.name}</option>
              })
            }
          </select>
        </div>
        <Button type='button' handleClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  )
}

VillainForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onImageChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  heroes: PropTypes.array.isRequired
}
export default VillainForm
