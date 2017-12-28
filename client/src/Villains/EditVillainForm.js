import React from 'react'
import PropTypes from 'prop-types'

const style = {
  background: {
    background: 'url(http://bsnscb.com/data/out/207/39464024-villain-wallpapers.jpg) center',
    width: '100vw',
    height: '80vh'
  }
}
const EditVillainForm = ({submitVillainToServer, name, img, universe, nemesis, onImgChange,
  onNameChange, onNemesisChange, onUniverseChange, heroes}) => {
  return (
    <form style={style.background}>
      <div>
        <label>Name</label>
        <input onChange={onNameChange} value={name} />
      </div>
      <div>
        <label>Img</label>
        <input onChange={onImgChange} value={img} />
      </div>
      <div>
        <label>Universe:</label>
        <input onChange={onUniverseChange} value={universe} />
      </div>
      <div>
        <label>Nemesis:</label>
        <select onChange={onNemesisChange}>
          <option>No nemesis</option>
          {
            heroes.map(hero => {
              return <option value={hero._id}>{hero.name}</option>
            })
          }
        </select>
      </div>
      <button type='button' onClick={submitVillainToServer}>Save Changes</button>
    </form>
  )
}

EditVillainForm.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  universe: PropTypes.string.isRequired,
  nemesis: PropTypes.string.isRequired,
  submitVillainToServer: PropTypes.func.isRequired,
  onImgChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNemesisChange: PropTypes.func.isRequired,
  onUniverseChange: PropTypes.func.isRequired,
  heroes: PropTypes.array.isRequired
}

export default EditVillainForm
