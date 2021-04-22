import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { LevelContext } from './Context'

const H = forwardRef((props, ref) => (
  <LevelContext.Consumer>
    {level => {
      const Heading = `h${Math.min(level, 6)}`
      return <Heading className={props && props.className} ref={ref} {...props} />
    }}
  </LevelContext.Consumer>
))

H.displayName = 'Heading.H'

H.propTypes = {
  className: PropTypes.string,
}

export default H
