import React from "react";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import Layout from "./LayoutEngine";
import Draggable from "./Draggable";

import "./layout.css";

// https://redux.js.org/recipes/isolating-redux-sub-apps
class LayoutProvider extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  render() {
    return <Provider store={this.store}>{this.props.children}</Provider>;
  }
}

export { LayoutProvider, Layout, Draggable };
