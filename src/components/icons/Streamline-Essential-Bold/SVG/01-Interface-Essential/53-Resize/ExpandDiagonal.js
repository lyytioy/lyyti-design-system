import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandDiagonal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 19.5a1 1 0 001 1h4a1 1 0 00.707-1.707l-.939-.94a.249.249 0 010-.353L17.5 8.267a.25.25 0 01.354 0l.939.939a1 1 0 00.707.294.987.987 0 00.383-.076A1 1 0 0020.5 8.5v-4a1 1 0 00-1-1h-4a1 1 0 00-.707 1.707l.939.939a.25.25 0 010 .354L6.5 15.731a.25.25 0 01-.354 0l-.939-.939A1 1 0 003.5 15.5z" />
  );

export default SvgExpandDiagonal;
