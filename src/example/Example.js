import React from "react";

import Layout from "../engine";

// Own config
import initial from "./initial";
import widgets from "./widgets"; // todo: some kind of initialisation?

import "./example.css";

function Example() {
  return <Layout initialConfig={initial} widgets={widgets} />;
}

export default React.memo(Example);
