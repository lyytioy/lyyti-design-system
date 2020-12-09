import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.5 6.25a2 2 0 00-2 2v13a2 2 0 002 2h13a2 2 0 002-2v-13a2 2 0 00-2-2H16a1 1 0 00-1 1v2.263a.25.25 0 00.273.249 2.49 2.49 0 012.186.935 2.6 2.6 0 01-.291 3.42l-3.4 3.4a2.5 2.5 0 01-3.536 0l-3.4-3.4a2.6 2.6 0 01-.291-3.42 2.49 2.49 0 012.186-.935A.25.25 0 009 9.513V7.25a1 1 0 00-1-1z" />,
    <path d="M10.5 11a.25.25 0 01-.25.25H8.5a1 1 0 00-.707 1.707l3.5 3.5a1 1 0 001.414 0l3.5-3.5a1 1 0 00-.707-1.707h-1.75a.25.25 0 01-.25-.25V2.25a1.5 1.5 0 00-3 0z" />
  );

export default SvgDownloadButton;
