import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonZigzag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5 21a.5.5 0 010-1h11.5c1.654 0 3-1.346 3-3s-1.346-3-3-3h-9c-2.206 0-4-1.794-4-4s1.794-4 4-4h11.294l-3.147-3.147a.5.5 0 11.707-.708l4 4c.042.041.065.085.08.112.001 0 .016.021.028.051a.513.513 0 01.038.192.363.363 0 01-.009.069.457.457 0 01-.144.291l-3.994 3.994a.5.5 0 11-.708-.708L18.792 7H7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3h9c2.206 0 4 1.794 4 4s-1.794 4-4 4H5z" />
  );

export default SvgButtonZigzag;
