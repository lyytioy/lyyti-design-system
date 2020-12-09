import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24a.496.496 0 01-.233-.058A18.23 18.23 0 012 7.764V1.5C2 .673 2.673 0 3.5 0h17c.827 0 1.5.673 1.5 1.5v6.264a18.234 18.234 0 01-9.767 16.178A.496.496 0 0112 24zM3.5 1a.5.5 0 00-.5.5v6.264a17.249 17.249 0 009 15.169c5.555-3.032 9-8.832 9-15.169V1.5a.5.5 0 00-.5-.5h-17z" />,
    <path d="M16 14.498a.5.5 0 01-.354-.146L12 10.705l-3.646 3.646a.5.5 0 11-.708-.707l3.646-3.646-3.646-3.646a.5.5 0 01.708-.707L12 9.291l3.646-3.646a.5.5 0 11.708.707l-3.646 3.646 3.646 3.646a.5.5 0 01-.354.854z" />
  );

export default SvgRemoveShield;
