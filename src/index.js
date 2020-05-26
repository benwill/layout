import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.css";

if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
