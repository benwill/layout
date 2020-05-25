import React, { useState } from "react";

import { Layout, LayoutProvider, Draggable } from "../engine";

// Own config
import initial from "./initial";
import widgets from "./widgets"; // todo: some kind of initialisation?

import "./example.css";

function Example() {
  const [canEdit, setCanEdit] = useState(true);

  return (
    <div className="example">
      <LayoutProvider>
        <div className="example__header">
          <button onClick={() => setCanEdit(!canEdit)}>Toggle edit mode</button>
        </div>

        <div className="example__body">
          <div className="example__body__preview">
            <Layout
              initialConfig={initial}
              widgets={widgets}
              canEdit={canEdit}
            />
          </div>

          {canEdit && (
            <div className="example__body__toolbox">
              Toolbox
              <Draggable
                type="TEXT"
                props={{
                  value: "h2344",
                }}
              >
                <div>Add text</div>
              </Draggable>
              <Draggable
                type="SECTION"
                props={{
                  title: "new section",
                }}
              >
                <div>Add section</div>
              </Draggable>
            </div>
          )}
        </div>
      </LayoutProvider>
    </div>
  );
}

export default React.memo(Example);
