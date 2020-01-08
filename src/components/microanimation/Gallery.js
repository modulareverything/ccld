import React from 'react'
import tw from 'tailwind.macro'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div>
      <pre css={tw`text-sm mb-2`}>Gallery.js</pre>
      <Router>
        <ul css={tw`flex`}>
          <NavLink css={tw`mr-2 hover:underline`} to="/">
            One
          </NavLink>
          <NavLink css={tw`mr-2 hover:underline`} to="/two">
            Two
          </NavLink>
          <NavLink css={tw`hover:underline`} to="/three">
            Three
          </NavLink>
        </ul>

        <div>
          <Switch>
            <Route exact path="/" component={One} />
            <Route exact path="/two" component={Two} />
            <Route exact path="/three" component={Three} />
          </Switch>
        </div>
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
    <div className="page-route">
      <h1>One</h1>
    </div>
  )
}
const Two = () => {
  return (
    <div className="page-route two">
      <h1>Two</h1>
    </div>
  )
}
const Three = () => {
  return (
    <div className="page-route three">
      <h1>Three</h1>
    </div>
  )
}

export default Gallery
