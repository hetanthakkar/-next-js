import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import Code from "../Layout/code";
import Props from "../Layout/table";
import Playground from "../Layout/playground";
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
    <div style={{ marginLeft: "20%" }}>
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
              maxWidth: "72%",
              flexWrap: "wrap",
              marginTop: "2%",
            }}
          >
            Buttons are touchable elements used to interact with the screen.
            They may display text, icons, or both. Buttons can be styled with
            several props to look a specific way.
          </p>
          <div style={{ flexDirection: "row", padding: 5, marginBottom: "2%" }}>
            <img
              style={{ width: "24%" }}
              src="https://reactnativeelements.com/img/button/button--clear.jpg"
              alt="new"
            />
            <img
              style={{ width: "24%" }}
              src="https://reactnativeelements.com/img/button/button--clear.jpg"
              alt="new"
            />
            <img
              style={{ width: "24%" }}
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
  );
};

export default About;
