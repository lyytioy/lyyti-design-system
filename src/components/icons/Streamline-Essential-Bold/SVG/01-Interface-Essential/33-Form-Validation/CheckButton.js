import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 8a3 3 0 00-3-3H3a3 3 0 00-3 3v8a3 3 0 003 3h18a3 3 0 003-3zm-2 8a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h18a1 1 0 011 1z" />,
    <path d="M18.629 9.6l-1.892 2.366a.254.254 0 01-.182.093.246.246 0 01-.19-.073l-1.073-1.072a1.05 1.05 0 00-1.484 1.486l2.1 2.1a1.071 1.071 0 001.563-.087l2.8-3.5A1.051 1.051 0 0018.629 9.6z" />
  );

export default SvgCheckButton;
