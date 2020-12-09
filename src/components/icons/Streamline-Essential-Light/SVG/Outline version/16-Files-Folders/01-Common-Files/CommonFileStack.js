import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileStack = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8 19.5c-.827 0-1.5-.673-1.5-1.5V2c0-.827.673-1.5 1.5-1.5h9.586c.401 0 .777.156 1.061.439l2.414 2.414c.283.283.439.66.439 1.06V18c0 .827-.673 1.5-1.5 1.5H8zm0-18a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h12a.5.5 0 00.5-.5V4.414a.497.497 0 00-.146-.353L17.94 1.647a.502.502 0 00-.354-.147H8z" />,
    <path d="M6 21.5c-.827 0-1.5-.673-1.5-1.5V4a.5.5 0 011 0v16a.5.5 0 00.5.5h12a.5.5 0 010 1H6z" />,
    <path d="M4 23.5c-.827 0-1.5-.673-1.5-1.5V6a.5.5 0 011 0v16a.5.5 0 00.5.5h12a.5.5 0 010 1H4z" />
  );

export default SvgCommonFileStack;
