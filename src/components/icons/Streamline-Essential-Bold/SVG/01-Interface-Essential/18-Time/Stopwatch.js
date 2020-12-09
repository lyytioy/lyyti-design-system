import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgStopwatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19.159 8.256l1.548-1.548a1 1 0 10-1.414-1.414l-1.6 1.6A9.448 9.448 0 0013 5.053V2h2a1 1 0 100-2H9a1 1 0 000 2h2v3.053a9.5 9.5 0 108.159 3.2zM12 22a7.5 7.5 0 117.5-7.5A7.509 7.509 0 0112 22z" />,
    <path d="M9.207 10.294a1 1 0 00-1.414 1.414l3.5 3.5a1.014 1.014 0 001.414 0 1 1 0 000-1.414z" />
  );

export default SvgStopwatch;
