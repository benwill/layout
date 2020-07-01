import shortid from "shortid";

export default {
  root: {
    id: shortid.generate(),
    type: "Standard",
    props: {
      sidePanelStyle: "right",
    },
    areas: {
      top: [
        {
          areas: {},
          id: shortid.generate(),
          type: "TEXT",
          props: {
            value: "Some fancy page with content",
            style: "h1",
          },
        },
      ],
      main: [
        {
          areas: {
            main: [
              {
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
                              image: "cat1",
                            },
                          },
                        ],
                      },
                      id: shortid.generate(),
                      type: "BOX",
                      props: {
                        height: 300,
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
                              image: "cat3",
                            },
                          },
                        ],
                      },
                      id: shortid.generate(),
                      type: "BOX",
                      props: {
                        height: 300,
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
                              image: "cat2",
                            },
                          },
                        ],
                      },
                      id: shortid.generate(),
                      type: "BOX",
                      props: {
                        height: 300,
                      },
                    },
                  ],
                  main_4: [],
                },
                id: shortid.generate(),
                type: "ROW",
                props: {
                  height: 300,
                  columns: 3,
                },
              },
            ],
          },
          id: shortid.generate(),
          type: "SECTION",
          props: {
            title: "new section",
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
                      props: {
                        type: "Line",
                      },
                    },
                  ],
                },
                id: shortid.generate(),
                type: "BOX",
                props: {
                  height: "100%",
                  background: "has-background-success",
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
                          "Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff Some cool stuff ",
                        style: "default",
                      },
                    },
                  ],
                },
                id: shortid.generate(),
                type: "BOX",
                props: {
                  height: "100%",
                  background: "has-background-danger",
                },
              },
            ],
            main_3: [],
            main_4: [],
          },
          id: shortid.generate(),
          type: "ROW",
          props: {
            height: 200,
            columns: 2,
          },
        },
      ],
      sidepanel: [
        {
          areas: {
            main: [
              {
                areas: {},
                id: shortid.generate(),
                type: "TEXT",
                props: {
                  value: "Some example fixed content",
                  style: "kpi",
                },
              },
            ],
          },
          id: shortid.generate(),
          type: "BOX",
          props: {
            height: "auto",
          },
        },
        {
          areas: {
            main: [
              {
                areas: {},
                id: shortid.generate(),
                type: "CHART",
                props: {
                  type: "Pie",
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
    },
  },
};
