import LayoutWithToolbar from "./LayoutWithToolbar";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Text from "./Text";
import Section from "./Section";
import HeaderBody from "./HeaderBody";

export default {
  HeaderBody: {
    component: HeaderBody,
    canDrag: false,
    icon: "fa-square",
  },
  LayoutWithToolbar: {
    component: LayoutWithToolbar,
    canDrag: false,
    icon: "fa-square",
  },
  SIDEBAR: {
    component: Sidebar,
    canDrag: false,
    icon: "fa-square",
  },
  TOOLBAR: {
    component: Toolbar,
    canDrag: false,
    icon: "fa-heading",
  },
  TEXT: {
    component: Text,
    canDrag: true,
    icon: "fa-font",
    defaultProps: { value: "Some text" },
  },
  SECTION: {
    component: Section,
    canDrag: true,
    icon: "fa-square",
    defaultProps: { title: "new section" },
  },
};
