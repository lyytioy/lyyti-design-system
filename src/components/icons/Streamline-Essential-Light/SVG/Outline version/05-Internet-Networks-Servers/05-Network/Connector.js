import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6 19c-.827 0-1.5-.673-1.5-1.5V17H1a.5.5 0 010-1h3.5v-1H1a.5.5 0 010-1h3.5v-.5c0-.827.673-1.5 1.5-1.5h2a.5.5 0 00.5-.5v-2c0-.827.673-1.5 1.5-1.5h.5V4.5a.5.5 0 011 0V8h1V4.5a.5.5 0 011 0V8h.5c.827 0 1.5.673 1.5 1.5v2a.5.5 0 00.5.5h2c.827 0 1.5.673 1.5 1.5v.5H23a.5.5 0 010 1h-3.5v1H23a.5.5 0 010 1h-3.5v.5c0 .827-.673 1.5-1.5 1.5H6zm0-6a.5.5 0 00-.5.5v4a.5.5 0 00.5.5h12a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-2c-.827 0-1.5-.673-1.5-1.5v-2A.5.5 0 0014 9h-4a.5.5 0 00-.5.5v2c0 .827-.673 1.5-1.5 1.5H6z" />
  );

export default SvgConnector;
