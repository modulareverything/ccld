import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import tw from 'tailwind.macro'

const Curtains = () => {
  const [isCurtainOpen, setCurtain] = useState(false)
  const { x } = useSpring({
    x: isCurtainOpen ? 100 : 0,
  })

  return (
    <div>
      <div css={tw`bg-gray-900 overflow-hidden flex flex-row`}>
        <animated.div
          style={{
            transform: x.interpolate(x => `translate3d(${x * -1}%,0,0)`),
          }}
          css={tw`bg-red-800 h-32 w-6/12`}
        ></animated.div>
        <animated.div
          style={{ transform: x.interpolate(x => `translate3d(${x}%,0,0)`) }}
          css={tw`bg-red-700 h-32 w-6/12 shadow-2xl`}
        ></animated.div>
      </div>
      <button
        css={tw`mt-4 border py-1 px-4 border-red-800 bg-red-700 text-white text-sm uppercase`}
        onClick={() => setCurtain(!isCurtainOpen)}
      >
        IT'S COITAINS FOR YOU ROCKY
      </button>
    </div>
  )
}

export default Curtains
