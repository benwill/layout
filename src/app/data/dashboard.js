import shortid from "shortid";

export default {
  root: {
    id: shortid.generate(),
    type: "HeaderBody",
    areas: {
      top: [
        {
          id: shortid.generate(),
          type: "JUMBOTRON",
          props: {
            title: "Some original title",
            subtitle: "Some sub title for page",
          },
        },
      ],
      main: [
        {
          id: shortid.generate(),
          type: "ROW",
          areas: {
            left: [],
            middle: [],
            right: [],
          },
          props: {
            height: 200,
          },
        },
      ],
    },
  },
};
