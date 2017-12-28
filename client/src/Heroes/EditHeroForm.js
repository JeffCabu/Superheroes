import React from 'react'
import PropTypes from 'prop-types'

const style = {
  background: {
    background: 'url(https://i.imgur.com/FVJGV4b.jpg)center',
    width: '100vw',
    height: '94vh'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 200
  },
  text: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid white 2px',
    width: '50%',
    backgroundColor: 'rgba(0, 39, 107, 0.8)'
  }
}

const EditHeroForm = ({submitHeroToServer, name, img, superPower, universe, nemesis,
  onImgChange, onNameChange, onSuperPowerChange, onNemesisChange, onUniverseChange, villains}) => {
  return (
    <form style={style.background}>
      <div style={style.center}>
        <div style={style.text}>
          <div>
            <label>Name: </label>
            <input onChange={onNameChange} value={name} />
          </div>
          <div>
            <label>Img: </label>
            <input onChange={onImgChange} value={img} />
          </div>
          <div>
            <label>Super Power: </label>
            <input onChange={onSuperPowerChange} value={superPower} />
          </div>
          <div>
            <label>Universe: </label>
            <input onChange={onUniverseChange} value={universe} />
          </div>
          <div>
            <label>Nemesis: </label>
            <select onChange={onNemesisChange}>
              <option>No nemsis</option>
              {
                villains.map(villain => {
                  return <option value={villain._id}>{villain.name}</option>
                })
              }
            </select>
          </div>
          <button type='button' onClick={submitHeroToServer}>Save Changes</button>
        </div>
      </div>
    </form>
  )
}

EditHeroForm.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  superPower: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  nemesis: PropTypes.string.isRequired,
  submitHeroToServer: PropTypes.func.isRequired,
  onImgChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  onSuperPowerChange: PropTypes.func.isRequired,
  villains: PropTypes.array.isRequired
}

export default EditHeroForm
