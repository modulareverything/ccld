import React from 'react'
import { useSpring, animated } from 'react-spring'
import tw from 'tailwind.macro'

const FadeIn = () => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

  return (
    <div>
      <animated.div style={fade} css={tw`bg-gray-200 p-4 text-gray-800`}>
        <p>This should have faded in 😇</p>
      </animated.div>
    </div>
  )
}

export default FadeIn
