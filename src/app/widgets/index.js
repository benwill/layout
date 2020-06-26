import Standard from "./layouts/Standard";
import HeaderBody from "./layouts/HeaderBody";
import Sidebar from "./structure/Sidebar";
import Toolbar from "./structure/Toolbar";
import Section from "./structure/Section";
import SidePanel from "./structure/SidePanel";
import Text from "./content/Text";
import EditText from "./content/EditText";

export default {
  HeaderBody: {
    component: HeaderBody,
    canDrag: false,
    icon: "fa-square",
  },
  Standard: {
    component: Standard,
    canDrag: false,
    icon: "fa-square",
  },
  SIDEBAR: {
    component: Sidebar,
    canDrag: false,
    icon: "fa-square",
  },
  SidePanel: {
    component: SidePanel,
    canDrag: true,
    icon: "fa-square",
  },
  TOOLBAR: {
    component: Toolbar,
    canDrag: false,
    icon: "fa-heading",
  },
  TEXT: {
    component: Text,
    edit: EditText,
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
