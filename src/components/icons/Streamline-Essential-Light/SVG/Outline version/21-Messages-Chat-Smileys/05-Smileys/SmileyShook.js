import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M8.75 11.5a.5.5 0 01-.354-.146L7.25 10.207l-1.146 1.146a.5.5 0 11-.708-.707L6.543 9.5 5.396 8.354A.5.5 0 015.75 7.5a.5.5 0 01.354.146L7.25 8.793l1.146-1.146a.5.5 0 11.708.707L7.957 9.5l1.146 1.146a.5.5 0 01-.353.854zM18 11.5a.5.5 0 01-.354-.146L16.5 10.207l-1.146 1.146a.5.5 0 11-.708-.707L15.793 9.5l-1.146-1.146a.5.5 0 11.707-.708L16.5 8.793l1.146-1.146a.5.5 0 11.708.707L17.207 9.5l1.146 1.146A.5.5 0 0118 11.5zM12 20c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2s2 .897 2 2v2c0 1.103-.897 2-2 2zm0-5c-.551 0-1 .448-1 1v2a1.001 1.001 0 002 0v-2a1 1 0 00-1-1z" />
  );

export default SvgSmileyShook;