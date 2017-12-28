import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from '../Components/CardHeader'
import CardSubtitle from '../Components/CardSubtitle'
import {
  Link
} from 'react-router-dom'

const style = {
  conatiner: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  img: {
    width: '25%',
    maxHeight: '50%'
  }
}
const VillainCard = ({villain, deleteVillain, showUniqueVillain}) => {
  return (
    <div style={style.conatiner}>
      <div>
        <CardHeader name={villain.name} img={villain.img} />
      </div>
      <div>
        <CardSubtitle title={'Universe'} trait={villain.universe} />
        <CardSubtitle title={'Nemesis'} trait={villain.nemesis ? villain.nemesis.name : 'no nemesis'} />
      </div>
      <button type='button' onClick={() => deleteVillain(villain)}>Delete</button>
      <button type='button' onClick={() => showUniqueVillain(villain)}>More Info</button>
      <Link to={`/villain/${villain._id}`}>Villain Info</Link>
    </div>
  )
}

VillainCard.propTypes = {
  villain: PropTypes.object.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}
export default VillainCard
