import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import tw from 'tailwind.macro'

const Mounting = () => {
  const [isToggled, setToggle] = useState(false)
  const transition = useTransition(isToggled, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <div>
      <pre css={tw`text-sm mb-2`}>mounting.js</pre>
      <div css={tw`bg-blue-800 p-4 text-blue-200`}>
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <animated.h2 key={key} style={props} css={tw`mb-4`}>
                Hey, I didn't exist in the DOM a moment ago, but&mdash;guess
                what!&mdash;now I do.
              </animated.h2>
            )
        )}
        <button
          css={tw`border py-1 px-4 border-blue-800 bg-blue-600 text-white text-sm uppercase`}
          onClick={() => setToggle(!isToggled)}
        >
          {isToggled ? 'Unmount Component' : 'Mount Component'}
        </button>
      </div>
    </div>
  )
}

export default Mounting
