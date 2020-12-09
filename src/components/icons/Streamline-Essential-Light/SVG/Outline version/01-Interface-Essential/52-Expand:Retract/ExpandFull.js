import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.5 6a.5.5 0 01-.5-.5v-4a.5.5 0 00-.5-.5h-6a.5.5 0 010-1h6c.827 0 1.5.673 1.5 1.5v4a.5.5 0 01-.5.5zM.5 6a.5.5 0 01-.5-.5v-4C0 .673.673 0 1.5 0h6a.5.5 0 010 1h-6a.5.5 0 00-.5.5v4a.5.5 0 01-.5.5zM16.5 24a.5.5 0 010-1h6a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .827-.673 1.5-1.5 1.5h-6zM1.5 24C.673 24 0 23.327 0 22.5v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h6a.5.5 0 010 1h-6zM6.5 15.999c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h11c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5h-11zm0-7a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-11z" />
  );

export default SvgExpandFull;
