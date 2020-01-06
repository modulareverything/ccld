import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Container = props => {
  /**
   * Recreating the Tailwind container as we don't
   * have access to plugins with this setup.
   *
   * 1. Set some breakpoints from Tailwinds defaults
   * 2. Loop through these to set our media queries
   *
   */
  const breakpoints = [640, 768, 1024, 1280]
  const PageContainer = styled.div`
    /** Apply the fundamental styling */
    ${tw`
      mx-auto px-4
    `}

    /** Is this a flex container? */
    ${props.isFlex ? tw`sm:flex sm:justify-between` : ''}

    /** Output our breakpoints */
    ${breakpoints.map(
      minWidth =>
        `@media(min-width: ${minWidth}px) { max-width: ${minWidth}px }`
    )}
  `

  /** Render that beauty */
  return <PageContainer>{props.children}</PageContainer>
}

export default Container
