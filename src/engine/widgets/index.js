import PageContainer from "./PageContainer";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Text from "./Text";
import Section from "./Section";

export default {
  PAGE: {
    component: PageContainer,
    canDrag: false
  },
  SIDEBAR: {
    component: Sidebar,
    canDrag: false
  },
  TOOLBAR: {
    component: Toolbar,
    canDrag: false
  },
  TEXT: {
    component: Text,
    canDrag: true
  },
  SECTION: {
    component: Section,
    canDrag: false
  }
};
