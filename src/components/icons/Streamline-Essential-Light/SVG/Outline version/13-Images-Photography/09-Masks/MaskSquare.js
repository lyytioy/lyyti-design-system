import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23.5c-.827 0-1.5-.673-1.5-1.5V2C.5 1.173 1.173.5 2 .5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zm0-22a.5.5 0 00-.5.5v20a.5.5 0 00.5.5h20a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2z" />,
    <path d="M5.5 19.5c-.551 0-1-.448-1-1v-13c0-.551.449-1 1-1h13c.552 0 1 .449 1 1v13a1 1 0 01-1 1h-13zm0-1h13v-13h-13v13z" />
  );

export default SvgMaskSquare;
