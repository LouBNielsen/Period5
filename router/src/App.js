import React from "react"
import { IndexLink, Link } from "react-router";

//Outer View start
export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
          <li><Link activeClassName="active" to="/products">Products</Link></li>
          <li><Link activeClassName="active" to="/company">Company</Link></li>
          <li><Link activeClassName="active" to="/blog">Blog</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
// props.children: er children til Router (Den store menu), som ses i routerComponent. 
// Under Router er en Route, som er det der bliver vist i <div>'en (Undermenuen)
//Outer View end

