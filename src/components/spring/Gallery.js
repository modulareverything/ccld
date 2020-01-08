import React, { useContext } from 'react'
import tw from 'tailwind.macro'
import { animated, useTransition } from 'react-spring'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext,
} from 'react-router-dom'

function useRouter() {
  return useContext(__RouterContext)
}

const Gallery = () => {
  return (
    <div css={tw`overflow-hidden w-full`}>
      <pre css={tw`text-sm mb-2`}>Gallery.js</pre>
      <Router>
        <ul css={tw`flex`}>
          <NavLink css={tw`mr-2 hover:underline`} to="/clippings/react-spring">
            One
          </NavLink>
          <NavLink
            css={tw`mr-2 hover:underline`}
            to="/clippings/react-spring/two"
          >
            Two
          </NavLink>
          <NavLink css={tw`hover:underline`} to="/clippings/react-spring/three">
            Three
          </NavLink>
        </ul>
        <div css={tw`h-64 overflow-hidden relative`}>
          <Main />
        </div>
      </Router>
    </div>
  )
}

const Main = () => {
  const { location } = useRouter()

  const transitions = useTransition(location, location => location.key, {
    from: {
      position: 'absolute',
      width: '100%',
      transform: 'translate3d(100%, 0, 0)',
    },
    enter: { transform: 'translate3d(0, 0, 0)' },
    leave: { transform: 'translate3d(-100%, 0, 0)' },
  })

  return transitions.map(({ item, props: transitionStyle, key }) => (
    <animated.div style={transitionStyle}>
      <Switch location={item}>
        <Route exact path="/clippings/react-spring" component={One} />
        <Route exact path="/clippings/react-spring/two" component={Two} />
        <Route exact path="/clippings/react-spring/three" component={Three} />
      </Switch>
    </animated.div>
  ))
}

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  )
}

const One = () => {
  return (
    <div css={tw`w-full h-64 bg-teal-200 flex justify-center items-center`}>
      <h1 css={tw`text-3xl text-teal-800`}>One</h1>
    </div>
  )
}
const Two = () => {
  return (
    <div css={tw`w-full h-64 bg-teal-400 flex justify-center items-center`}>
      <h1 css={tw`text-3xl text-teal-800`}>Two</h1>
    </div>
  )
}
const Three = () => {
  return (
    <div css={tw`w-full h-64 bg-teal-600 flex justify-center items-center`}>
      <h1 css={tw`text-3xl text-teal-200`}>Three</h1>
    </div>
  )
}

export default Gallery
