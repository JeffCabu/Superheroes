import React from 'react'
import PropTypes from 'prop-types'
import VillainCard from './VillainCard'

const style = {
  container: {
    background: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'darkred'
  }
}
const Villains = ({villains, deleteVillain, showUniqueVillain}) =>
  <div style={style.container}>
    <h2>Super Villains</h2>
    {
      villains.map((villain, index) => {
        return (
          <VillainCard
            villain={villain}
            key={index}
            deleteVillain={deleteVillain}
            showUniqueVillain={showUniqueVillain}
          />
        )
      })
    }
  </div>

Villains.propTypes = {
  villains: PropTypes.array.isRequired,
  deleteVillain: PropTypes.func.isRequired,
  showUniqueVillain: PropTypes.func.isRequired
}
export default Villains
