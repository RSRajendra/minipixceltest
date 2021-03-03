import React, { useContext } from "react";
import NavigationItem from "./navigationItem";
const NavigationItems = () => {
  return (
    <ul
      style={{
        alignItems: "start",
        alignContent: "center",
        marginBlockStart: "0rem",
        listStyleType: "none",
      }}
    >
      <NavigationItem style={{ display: "block" }}>Customers</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
