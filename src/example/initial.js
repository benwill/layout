import shortid from "shortid";

export default {
  root: {
    id: shortid.generate(),
    type: "LayoutWithToolbar",
    areas: {
      top: [
        {
          id: shortid.generate(),
          props: {},
          type: "TOOLBAR",
        },
      ],
      main: [
        {
          id: shortid.generate(),
          type: "SECTION",
          props: {
            title: "Section 1",
          },
          areas: {
            main: [
              {
                id: shortid.generate(),
                type: "TEXT",
                props: {
                  value: "hello world",
                },
              },
            ],
          },
        },
        {
          id: shortid.generate(),
          type: "SECTION",
          props: {
            title: "Section 2",
          },
          areas: {
            main: [
              {
                id: shortid.generate(),
                type: "TEXT",
                props: {
                  value: "hello world",
                },
              },
            ],
          },
        },
      ],
      right: [
        {
          id: shortid.generate(),
          type: "SIDEBAR",
          props: {},
          areas: {
            top: [
              {
                id: shortid.generate(),
                type: "TEXT",
                props: {
                  value: "abc",
                },
              },
            ],
          },
        },
      ],
    },
  },
};
