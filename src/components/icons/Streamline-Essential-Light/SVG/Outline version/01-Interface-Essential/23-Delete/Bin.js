import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.5 24c-.827 0-1.5-.673-1.5-1.5V4H.5a.5.5 0 010-1H7V1.5C7 .673 7.673 0 8.5 0h7c.827 0 1.5.673 1.5 1.5V3h6.5a.5.5 0 010 1H21v18.5c0 .827-.673 1.5-1.5 1.5h-15zM4 22.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V4H4v18.5zM16 3V1.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V3h8z" />,
    <path d="M7.5 19.5A.5.5 0 017 19V7a.5.5 0 011 0v12a.5.5 0 01-.5.5zM12 19.5a.5.5 0 01-.5-.5V7a.5.5 0 011 0v12a.5.5 0 01-.5.5zM16.5 19.5a.5.5 0 01-.5-.5V7a.5.5 0 011 0v12a.5.5 0 01-.5.5z" />
  );

export default SvgBin;
