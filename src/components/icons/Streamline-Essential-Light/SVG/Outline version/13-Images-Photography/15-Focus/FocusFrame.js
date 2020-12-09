import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 19.5c-.827 0-1.5-.673-1.5-1.5V6c0-.827.673-1.5 1.5-1.5h19c.827 0 1.5.673 1.5 1.5v12c0 .827-.673 1.5-1.5 1.5h-19zm0-14A.5.5 0 002 6v12a.5.5 0 00.5.5h19a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5h-19z" />,
    <path d="M4.5 12.5A.5.5 0 014 12V8.5c0-.551.449-1 1-1h3.484a.5.5 0 010 1H5V12a.5.5 0 01-.5.5zM15.5 16.5a.5.5 0 010-1H19V12a.5.5 0 011 0v3.5a1 1 0 01-1 1h-3.5z" />
  );

export default SvgFocusFrame;
