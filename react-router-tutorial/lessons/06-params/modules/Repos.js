import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
        </ul>
      </div>
    )
  }
})

/**
 * Now go test your links out. Note that the parameter name in the route path becomes the property name in the component. 
 * Both repoName and userName are available on this.props.params of your component. 
 */