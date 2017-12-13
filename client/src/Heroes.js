import React from 'react'
import PropTypes from 'prop-types'

const Heroes = ({heroes}) =>
  <div>
    <h2>Super Heroes</h2>
    {
      heroes.map((hero, index) => {
        return (
          <h4 key={index}>{hero.name}</h4>
        )
      })
    }
  </div>

Heroes.propTypes = {
  heroes: PropTypes.array.isRequired
}
export default Heroes
