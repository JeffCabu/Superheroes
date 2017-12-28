import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Components/Button'

const HeroForm = ({onChangeHandler, handleSubmit, villains}) => {
  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input type='text' placeholder='Charater Name' onChange={onChangeHandler} id='name' />
        </div>
        <div>
          <label>SuperPower</label>
          <input type='text' placeholder='Super Power' onChange={onChangeHandler} id='superPower' />
        </div>
        <div>
          <label>Image</label>
          <input type='text' placeholder='Image' onChange={onChangeHandler} id='img' />
        </div>
        <div>
          <label>Universe</label>
          <input type='text' placeholder='Universe' onChange={onChangeHandler} id='universe' />
        </div>
        <div>
          <label>Nemesis</label>
          <select onChange={onChangeHandler} id='nemesis'>
            <option>Choose a nemesis</option>
            {
              villains.map(villain => {
                return <option value={villain._id}>{villain.name}</option>
              })
            }
          </select>
        </div>
        <Button type='button' handleClick={handleSubmit}>Submit Hero</Button>
      </form>
    </div>
  )
}

HeroForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  villains: PropTypes.array.isRequired
}
export default HeroForm
