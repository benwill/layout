import React from "react";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import LayoutEngine from "./LayoutEngine";

// https://redux.js.org/recipes/isolating-redux-sub-apps
class LayoutProvider extends React.Component {
  constructor(props) {
    super(props);
    this.store = configureStore();
  }

  render() {
    const { initialConfig, widgets } = this.props;
    return (
      <Provider store={this.store}>
        <LayoutEngine initialConfig={initialConfig} widgets={widgets} />
      </Provider>
    );
  }
}

export default LayoutProvider;
