import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.5 7a2 2 0 00-2 2v13a2 2 0 002 2h13a2 2 0 002-2V9a2 2 0 00-2-2h-2a1 1 0 00-1 1v5.408a3.556 3.556 0 01-2.771 3.518A3.5 3.5 0 018.5 13.5V8a1 1 0 00-1-1z" />,
    <path d="M10.5 13.5a1.5 1.5 0 003 0V5.75a.25.25 0 01.25-.25h1.75a1 1 0 00.707-1.707l-3.5-3.5a1 1 0 00-1.414 0l-3.5 3.5A1 1 0 008.5 5.5h1.75a.25.25 0 01.25.25z" />
  );

export default SvgUploadButton;
