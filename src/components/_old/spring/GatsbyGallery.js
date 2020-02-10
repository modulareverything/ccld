import React from 'react'
import tw from 'tailwind.macro'
import { Link } from 'gatsby'
import { Router } from '@reach/router'

const Gallery = () => {
  return (
    <div>
      <pre css={tw`text-sm mb-2`}>Gallery.js</pre>
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
      <Main />
    </div>
  )
}

const Main = () => {
  return (
    <div>
      <Router>
        <One path="/clippings/react-spring" />
        <Two path="/clippings/react-spring/two" />
        <Three path="/clippings/react-spring/three" />
      </Router>
    </div>
  )
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
