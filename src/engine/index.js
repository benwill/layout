// import React from "react";

// import { Provider } from "react-redux";
// import configureStore from "./redux/configureStore";
import Layout from "./Layout";
import Draggable from "./Draggable";

import "./index.css";

// // https://redux.js.org/recipes/isolating-redux-sub-apps
// class LayoutProvider extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.store = configureStore();
//   }

//   // // TODO: Think about a better way of returning this
//   // getState() {
//   //   return this.store.getState().layout.config;
//   // }

//   render() {
//     return <Provider store={this.store}>{this.props.children}</Provider>;
//   }
// }

export { Layout, Draggable };

export * from "./redux";
