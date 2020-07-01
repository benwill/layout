import shortid from "shortid";

export default {
  root: {
    id: shortid.generate(),
    type: "HeaderBody",
    areas: {
      top: [
        {
          areas: {},
          id: shortid.generate(),
          type: "JUMBOTRON",
          props: {
            title: "Some dashboard about dogss",
            subtitle: "And a cat...",
          },
        },
      ],
      main: [
        {
          id: shortid.generate(),
          type: "ROW",
          areas: {
            main_1: [
              {
                areas: {
                  main: [
                    {
                      areas: {},
                      id: shortid.generate(),
                      type: "IMAGE",
                      props: {
                        image: "dog1",
                      },
                    },
                  ],
                },
                id: shortid.generate(),
                type: "BOX",
                props: {
                  height: 300,
                  background: "has-background-info",
                },
              },
            ],
            main_2: [
              {
                areas: {
                  main: [
                    {
                      areas: {},
                      id: shortid.generate(),
                      type: "IMAGE",
                      props: {
                        image: "dog2",
                      },
                    },
                  ],
                },
                id: shortid.generate(),
                type: "BOX",
                props: {
                  height: 300,
                  background: "has-background-successs",
                },
              },
            ],
            main_3: [
              {
                areas: {
                  main: [
                    {
                      areas: {},
                      id: shortid.generate(),
                      type: "IMAGE",
                      props: {
                        image: "dog3",
                      },
                    },
                  ],
                },
                id: shortid.generate(),

                type: "BOX",
                props: {
                  height: 300,
                  background: "has-background-danger",
                },
              },
            ],
            main_4: [
              {
                areas: {
                  main: [
                    {
                      areas: {},
                      id: shortid.generate(),
                      type: "IMAGE",
                      props: {
                        image: "cat3",
                      },
                    },
                  ],
                },
                id: shortid.generate(),
                type: "BOX",
                props: {
                  height: 300,
                  background: "has-background-warning",
                },
              },
            ],
          },
          props: {
            height: 250,
            columns: 4,
          },
        },
        {
          areas: {
            main_1: [
              {
                areas: {
                  main: [
                    {
                      areas: {},
                      id: shortid.generate(),

                      type: "CHART",
                      props: {},
                    },
                  ],
                },
                id: shortid.generate(),

                type: "SECTION",
                props: {
                  title: "Some data in a section",
                },
              },
            ],
            main_2: [
              {
                areas: {
                  main: [
                    {
                      areas: {},
                      id: shortid.generate(),
                      type: "TEXT",
                      props: {
                        value:
                          "Some text content here. Some text content here. Some text content here. Some text content here. ",
                        style: "h2",
                      },
                    },
                  ],
                },
                id: shortid.generate(),
                type: "SECTION",
                props: {
                  title: "Another section",
                },
              },
            ],
            main_3: [],
            main_4: [],
          },
          id: shortid.generate(),
          type: "ROW",
          props: {
            height: 400,
            columns: 2,
          },
        },
      ],
    },
  },
};
