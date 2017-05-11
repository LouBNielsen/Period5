import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

/**
 * One way that Link is different from a is 
 * that it knows if the path it links to is active so you can style it differently.
 *  
 * Most links in your site don't need to know they are active, usually just primary navigation links need to know.
 * So instead of:
 *        <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
          <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
  can be replaced with NavLink
 * 
 */