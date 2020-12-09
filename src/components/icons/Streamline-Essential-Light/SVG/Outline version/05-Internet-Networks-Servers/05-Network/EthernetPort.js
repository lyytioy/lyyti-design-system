import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEthernetPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h21c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-21zm0-23a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-21z" />,
    <path d="M10 19c-.551 0-1-.448-1-1v-1H4.5c-.827 0-1.5-.673-1.5-1.5v-10C3 4.673 3.673 4 4.5 4h15c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5H15v1a1 1 0 01-1 1h-4zM4.5 5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h5a.5.5 0 01.5.5V18h4v-1.5a.5.5 0 01.5-.5h5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5H17v3.5a.5.5 0 01-1 0V5h-2v3.5a.5.5 0 01-1 0V5h-2v3.5a.5.5 0 01-1 0V5H8v3.5a.5.5 0 01-1 0V5H4.5z" />
  );

export default SvgEthernetPort;
