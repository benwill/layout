import shortid from "shortid";

export default {
  root: {
    id: shortid.generate(),
    type: "Standard",
    props: {
      sidePanelStyle: "right",
    },
    areas: {
      top: [],
      main: [
        {
          areas: {
            top: [],
            bottom: [
              {
                areas: {},
                id: shortid.generate(),
                type: "TEXT",
                props: {
                  value:
                    " loaso fas fgks gjdkj gsdkgsj dgjsdk gjsjgsk dgjsdgjloaso fas fgks gjdkj gsdkgsj dgjsdk gjsjgsk dgjsdgjloaso fas fgks gjdkj gsdkgsj dgjsdk gjsjgsk dgjsdgjloaso fas fgks gjdkj gsdkgsj dgjsdk gjsjgsk dgjsdgjloaso fas fgks gjdkj gsdkgsj dgjsdk gjsjgsk dgjsdgj",
                  style: "h1",
                },
              },
            ],
          },
          id: shortid.generate(),
          type: "TOPBOTTOM",
        },
      ],
      sidepanel: [],
    },
  },
};
