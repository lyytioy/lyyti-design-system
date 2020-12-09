import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M21.045 1.5H2.955A3.009 3.009 0 000 4.554v14.892A3.009 3.009 0 002.955 22.5h18.09A3.009 3.009 0 0024 19.446V4.554A3.009 3.009 0 0021.045 1.5zM22 19.446a1.01 1.01 0 01-.955 1.054H2.955A1.01 1.01 0 012 19.446V4.554A1.01 1.01 0 012.955 3.5h18.09A1.01 1.01 0 0122 4.554z" />,
    <circle cx={12} cy={12} r={2.5} />,
    <path d="M16.1 5.99a1 1 0 000 1.414 6.508 6.508 0 010 9.192 1 1 0 001.414 1.414 8.511 8.511 0 000-12.02 1 1 0 00-1.414 0zM7.9 5.99a1 1 0 00-1.414 0 8.511 8.511 0 000 12.02A1 1 0 107.9 16.6a6.508 6.508 0 010-9.2 1 1 0 000-1.41z" />
  );

export default SvgFocusAlternate;
