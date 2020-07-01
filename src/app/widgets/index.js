import Standard from "./layouts/Standard";
import HeaderBody from "./layouts/HeaderBody";
import Sidebar from "./structure/Sidebar";
import Toolbar from "./structure/Toolbar";
import Section from "./structure/Section";
import SidePanel from "./structure/SidePanel";
import Text from "./content/Text";
import EditText from "./content/EditText";
import Chart from "./content/Chart";
import EditChart from "./content/EditChart";
import Jumbotron from "./content/Jumbotron";
import Row from "./layouts/Row";
import Box from "./layouts/Box";
import EditRow from "./layouts/EditRow";
import EditBox from "./layouts/EditBox";
import IMAGE from "./content/Image";
import EditImage from "./content/EditImage";

export default {
  HeaderBody: {
    component: HeaderBody,
    canDrag: false,
    icon: "fa-square",
    supportedAreas: ["top", "main"],
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
    supportedAreas: ["main"],
  },
  TOOLBAR: {
    component: Toolbar,
    canDrag: false,
    icon: "fa-heading",
    supportedAreas: ["main"],
  },
  CHART: {
    component: Chart,
    canDrag: true,
    icon: "fa-chart-bar",
    edit: EditChart,
  },
  TEXT: {
    component: Text,
    edit: EditText,
    canDrag: true,
    icon: "fa-font",
    defaultProps: { value: "Some text", style: "default" },
  },
  SECTION: {
    component: Section,
    canDrag: true,
    icon: "fa-square",
    defaultProps: { title: "new section" },
    supportedAreas: ["main"],
  },
  JUMBOTRON: {
    component: Jumbotron,
    canDrag: true,
    icon: "fa-font",
    defaultProps: { title: "Title", subtitle: "Sub title" },
  },
  ROW: {
    component: Row,
    edit: EditRow,
    canDrag: true,
    icon: "fa-font",
    defaultProps: { height: 300, columns: 4 },
    supportedAreas: ["main_1", "main_2", "main_3", "main_4"],
  },
  BOX: {
    component: Box,
    edit: EditBox,
    canDrag: true,
    icon: "fa-box",
    defaultProps: { height: 300 },
    supportedAreas: ["main"],
  },
  IMAGE: {
    component: IMAGE,
    edit: EditImage,
    canDrag: true,
    icon: "fa-dog",
    defaultProps: {
      image: "dog2",
    },
  },
};
