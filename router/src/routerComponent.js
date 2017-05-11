import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Product from "./products";
import Company from "./company";
import App from "./App"
import Blog from "./blog";
import Details from "./details";
import Home from "./home"
import addBooks from "./models/addBooks"

export default class RouterComponent extends React.Component {

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
              bookStore={this.props.bookStore} />
            <Route path="/products/addBooks" component={addBooks} />
            <Route path="products/details/:id" component={Details}
              bookStore={this.props.bookStore} />
            <Route path="company" component={Company} />
            <Route path="blog" component={Blog} />
          </Route>
        </Router>
      </div>
    );
  }
}
//En hoved router og en masse sub routere(children // også props.children)