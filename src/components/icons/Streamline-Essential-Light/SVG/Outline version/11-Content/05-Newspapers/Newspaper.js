import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 23.5C.673 23.5 0 22.827 0 22V2C0 1.173.673.5 1.5.5h21c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5h-21zm0-22A.5.5 0 001 2v20a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5h-21z" />,
    <path d="M4 10c-.551 0-1-.449-1-1V4.5c0-.551.449-1 1-1h16c.552 0 1 .449 1 1V9c0 .551-.448 1-1 1H4zm0-1h16V4.5H4V9zM3.5 13a.5.5 0 010-1h7a.5.5 0 010 1h-7zM3.5 16a.5.5 0 010-1h7a.5.5 0 010 1h-7zM3.5 19a.5.5 0 010-1h7a.5.5 0 010 1h-7zM13.5 13a.5.5 0 010-1h7a.5.5 0 010 1h-7zM13.5 16a.5.5 0 010-1h7a.5.5 0 010 1h-7zM13.5 19a.5.5 0 010-1h7a.5.5 0 010 1h-7z" />
  );

export default SvgNewspaper;
