import React from 'react'
import { LevelContext } from './Context'

/**
 * Opens a new heading section. Every <Heading.H> inside it renders one
 * level deeper than the surrounding section.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {1|2|3|4|5|6} [props.levelOverride] Hard-sets the heading level
 *   for this section instead of incrementing the parent level.
 */
const Boundary = ({ children, levelOverride }) => (
  <LevelContext.Consumer>
    {level => (
      <LevelContext.Provider
        value={levelOverride ? parseInt(levelOverride, 10) : level + 1}
      >
        {children}
      </LevelContext.Provider>
    )}
  </LevelContext.Consumer>
)

Boundary.displayName = 'Heading.Boundary'

export default Boundary
