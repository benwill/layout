import shortid from "shortid";

export default {
  root: {
    id: shortid.generate(),
    type: "HeaderBody",
    areas: {
      top: [],
      main: [],
    },
  },
};
