import Standard from "./layouts/Standard";
import HeaderBody from "./layouts/HeaderBody";
import Section from "./layouts/Section";
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
import EditStandard from "./layouts/EditStandard";
import TopBottom from "./layouts/TopBottom";

export default {
  HeaderBody: {
    component: HeaderBody,
    canDrag: false,
    icon: "fa-square",
    supportedAreas: ["top", "main"],
  },
  Standard: {
    component: Standard,
    edit: EditStandard,
    canDrag: false,
    icon: "fa-square",
    defaultProps: {
      sidePanelStyle: "right",
    },
    supportedAreas: ["main", "top", "sidepanel"],
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
  TOPBOTTOM: {
    component: TopBottom,
    canDrag: true,
    icon: "fa-cat",
    supportedAreas: ["top", "bottom"],
    defaultProps: {
      top: 30,
      bottom: 70,
    },
  },
};
