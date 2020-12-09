import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyWrong = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M7.5 10.5A.5.5 0 017 10V9H6a.5.5 0 010-1h1V7a.5.5 0 011 0v1h1a.5.5 0 010 1H8v1a.5.5 0 01-.5.5zM16.5 10.5a.5.5 0 01-.5-.5V9h-1a.5.5 0 010-1h1V7a.5.5 0 011 0v1h1a.5.5 0 010 1h-1v1a.5.5 0 01-.5.5zM14.5 20c-1.654 0-3-1.346-3-3 0-1.103-.897-2-2-2s-2 .897-2 2v1a.5.5 0 01-1 0v-1c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.103.897 2 2 2s2-.897 2-2v-1a.5.5 0 011 0v1c0 1.654-1.346 3-3 3z" />
  );

export default SvgSmileyWrong;
