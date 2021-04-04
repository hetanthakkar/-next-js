import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import SidebarItem from "./sidebaritem";

const SideBar = ({ items, depthStep, depth }) => {
  return (
    <List disablePadding dense>
      {items.map((sidebarItem, index) => (
        <SidebarItem
          key={`${sidebarItem.name}${index}`}
          depthStep={depthStep}
          depth={depth}
          {...sidebarItem}
        />
      ))}
    </List>
  );
};

export default SideBar;
