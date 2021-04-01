import React from "react";
import ReactDOM from "react-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Button } from "../Layout/button";
// import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
const initialCodeString = `import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

<Button
  title="Solid Button"
/>

<Button
  title="Outline button"
  type="outline"
/>

<Button
  title="Clear button"
  type="clear"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>

<Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  iconRight
  title="Button with right icon"
/>

<Button
  title="Loading button"
  loading
/>
  `;
export default function App() {
  return (
    <div>
      <SyntaxHighlighter
        style={a11yDark}
        language="javascript"
        customStyle={{
          width: "70%",
          borderWidth: 2,
          borderRadius: 10,
          borderColor: "black",
        }}
      >
        {initialCodeString}
      </SyntaxHighlighter>
    </div>
  );
}
