import React from 'react'
import PropTypes from 'prop-types'
import HeroCard from './HeroCard'

const Heroes = ({heroes, deleteHero, showUniqueHero}) =>
  <div>
    <h2>Super Heroes</h2>
    {
      heroes.map((hero, index) => {
        return (
          <HeroCard
            hero={hero}
            key={index}
            deleteHero={deleteHero}
            showUniqueHero={showUniqueHero}
          />
        )
      })
    }
  </div>

Heroes.propTypes = {
  heroes: PropTypes.array.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}
export default Heroes
