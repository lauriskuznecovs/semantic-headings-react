import React, { forwardRef } from 'react'
import { LevelContext } from './Context'

/**
 * Renders an <h1>–<h6> element matching the current section level.
 * Levels deeper than 6 are clamped to <h6>. All props (including `ref`
 * and `className`) are forwarded to the heading element.
 */
const H = forwardRef((props, ref) => (
  <LevelContext.Consumer>
    {level => {
      const Heading = `h${Math.min(level, 6)}`
      return <Heading ref={ref} {...props} />
    }}
  </LevelContext.Consumer>
))

H.displayName = 'Heading.H'

export default H
