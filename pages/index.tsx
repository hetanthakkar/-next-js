import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Code from "../Layout/code";
import Props from "../Layout/table";
import Playground from "../Layout/playground";
import Navbar from "../components/navbar";
import { isMobileOnly } from "react-device-detect";
const sidebarItems = [
  { name: "Avatar", label: "Avatar" },
  {
    name: "Badge",
    label: "Badge",
  },
  {
    name: "ButtonGroup",
    label: "ButtonGroup",
  },

  {
    name: "Card",
    label: "Card",
  },
  {
    name: "Checkbox",
    label: "Checkbox",
  },
  {
    name: "Divider",
    label: "Divider",
  },
  {
    name: "Header",
    label: "Header",
  },
  {
    name: "Icon",
    label: "Icon",
  },
  {
    name: "Image",
    label: "Image",
  },
  {
    name: "Input",
    label: "Input",
  },
  {
    name: "ListItem",
    label: "ListItem",
  },
  {
    name: "Overlay",
    label: "Overlay",
  },
  {
    name: "Pricing",
    label: "Pricing",
  },
  {
    name: "Rating",
    label: "Rating",
  },
  {
    name: "Rating (Airbnb)",
    label: "Rating (Airbnb)",
  },
  {
    name: "Searchbar",
    label: "Searchbar",
  },
  {
    name: "Slider",
    label: "Slider",
  },
  {
    name: "SocialIcon",
    label: "SocialIcon",
  },
  {
    name: "Text",
    label: "Text",
  },
  {
    name: "Title",
    label: "Title",
  },
  {
    name: "ToolTip",
    label: "ToolTip",
  },
];

const About = () => {
  const props = [
    "buttonStyle",
    "containerStyle",
    "disabled",
    "disabledStyle",
    "disabledTitleStyle",
    "icon",
    "iconContainerStyle",
    "iconRight",
    "linearGradientProps",
    "loading",
    "loadingProps",
    "loadingStyle",
    "onPress",
    "raised",
    "title",
    "titleProps",
    "titleStyle",
    "TouchableComponent",
    "type",
    "ViewComponent",
  ];
  return (
    <div className="d-flex flex-row" style={{ flex: 1 }}>
      <div
        style={{
          width: isMobileOnly ? "100%" : 250,
          height: "100vh",
          // flex: 5.5,
          overflowY: "scroll",
        }}
      >
        <Navbar items={sidebarItems} />
      </div>
      <div style={{ height: "100vh", overflowY: "scroll", marginLeft: "5%" }}>
        <h1
          style={{
            padding: 6,
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: 45,
          }}
        >
          Button
        </h1>
        <Tabs defaultActiveKey="docs" id="uncontrolled-tab-example">
          <Tab eventKey="docs" title="Docs">
            <p
              style={{
                padding: 6,
                maxWidth: isMobileOnly ? "150%" : "72%",
                flexWrap: "wrap",
                marginTop: "2%",
              }}
            >
              Buttons are touchable elements used to interact with the screen.
              They may display text, icons, or both. Buttons can be styled with
              several props to look a specific way.
            </p>
            <div
              style={{ flexDirection: "row", padding: 5, marginBottom: "2%" }}
            >
              <img
                style={{ width: isMobileOnly ? "50%" : "24%" }}
                src="https://reactnativeelements.com/img/button/button--clear.jpg"
                alt="new"
              />
              <img
                style={{ width: isMobileOnly ? "50%" : "24%" }}
                src="https://reactnativeelements.com/img/button/button--clear.jpg"
                alt="new"
              />
              <img
                style={{ width: isMobileOnly ? "50%" : "24%" }}
                src="https://reactnativeelements.com/img/button/button--clear.jpg"
                alt="new"
              />
            </div>
            <Code />
            <h1
              style={{
                padding: 12,
              }}
            >
              Props
            </h1>
            <ul>
              {props.map((element) => {
                return (
                  <li>
                    <span className="prop">{element}</span>
                  </li>
                );
              })}
            </ul>
            <h1>Reference</h1>
            <Props />
            <Props />
            <Props />
            <Props />
          </Tab>
          <Tab eventKey="playgroudn" title="Playground">
            <div id="container2">
              <Playground />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
