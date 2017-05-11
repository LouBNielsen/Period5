import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

/**
 * The link to Home is always active if it looks like this:
 *           <li><NavLink to="/">Home</NavLink></li>
 * As we learned earlier, parent routes are active when child routes are active. 
 * Unfortunately, / is the parent of everything.

 * For this link, we want it to only be active when the index route is active. 
 * There are two ways to let the router know you're linking to the "index route" 
 * so it only adds the active class (or styles) when the index route is rendered.
 */
