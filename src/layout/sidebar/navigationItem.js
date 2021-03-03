import React from "react";
import { Link } from "react-router-dom";
const NavigationItem = (props) => {
  return (
    <li className="navigation-item">
      <Link to={props.link} className="navigation-item__link">
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
