import "../styles/globals.css";
import Navbar from "../components/navbar";
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

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ flexDirection: "row" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
