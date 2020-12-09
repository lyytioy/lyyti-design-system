import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.001 14.499a.496.496 0 01-.354-.147l-2.5-2.5a.5.5 0 11.708-.708l2.158 2.158 7.147-6.67a.5.5 0 11.683.73l-7.5 7a.495.495 0 01-.342.137z" />,
    <path d="M12 24a.496.496 0 01-.233-.058A18.227 18.227 0 012 7.763V1.5C2 .673 2.673 0 3.5 0h17c.827 0 1.5.673 1.5 1.5v6.263a18.235 18.235 0 01-9.767 16.179A.496.496 0 0112 24zM3.5 1a.5.5 0 00-.5.5v6.263a17.245 17.245 0 009 15.17c5.555-3.032 9-8.832 9-15.17V1.5a.5.5 0 00-.5-.5h-17z" />
  );

export default SvgCheckShield;
