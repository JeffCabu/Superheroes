import React from 'react'
import PropTypes from 'prop-types'
import CardHeader from '../Components/CardHeader'
import CardSubtitle from '../Components/CardSubtitle'
import {
  Link
} from 'react-router-dom'

// const style = {
//   conatiner: {

//   }
// }
const HeroCard = ({hero, deleteHero, showUniqueHero}) => {
  return (
    <div>
      <div>
        <CardHeader name={hero.name} img={hero.img} />
        <div>
          <CardSubtitle title={'Super Power:'} trait={hero.superPower} />
          <CardSubtitle title={'From Universe:'} trait={hero.universe} />
          <CardSubtitle title={'Nemesis:'} trait={hero.nemesis ? hero.nemesis.name : 'no nemesis'} />
        </div>
      </div>
      <div>
        <button type='button' onClick={() => deleteHero(hero)}>Delete</button>
        <button type='button' onClick={() => showUniqueHero(hero)}>More Info</button>
        <Link to={`/hero/${hero._id}`}>View Hero</Link>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired,
  deleteHero: PropTypes.func.isRequired,
  showUniqueHero: PropTypes.func.isRequired
}
export default HeroCard
