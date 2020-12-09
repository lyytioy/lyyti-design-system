import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6 12.5a.5.5 0 010-1h12a.5.5 0 010 1H6z" />,
    <path d="M2 23.5c-.827 0-1.5-.673-1.5-1.5V2C.5 1.173 1.173.5 2 .5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zm0-22a.5.5 0 00-.5.5v20a.5.5 0 00.5.5h20a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2z" />
  );

export default SvgSubtractSquare;
