import LayoutWithToolbar from "./LayoutWithToolbar";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Text from "./Text";
import Section from "./Section";

export default {
  LayoutWithToolbar: {
    component: LayoutWithToolbar,
    canDrag: false,
  },
  SIDEBAR: {
    component: Sidebar,
    canDrag: false,
  },
  TOOLBAR: {
    component: Toolbar,
    canDrag: false,
  },
  TEXT: {
    component: Text,
    canDrag: true,
  },
  SECTION: {
    component: Section,
    canDrag: true,
  },
};
