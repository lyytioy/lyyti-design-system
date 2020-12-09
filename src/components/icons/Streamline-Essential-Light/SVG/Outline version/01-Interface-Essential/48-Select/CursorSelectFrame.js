import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4 9.5a.5.5 0 01-.5-.5V5c0-.827.673-1.5 1.5-1.5h3.98a.5.5 0 010 1H5a.5.5 0 00-.5.5v4a.5.5 0 01-.5.5zM20 9.5a.5.5 0 01-.5-.5V5a.5.5 0 00-.5-.5h-3.98a.5.5 0 010-1H19c.827 0 1.5.673 1.5 1.5v4a.5.5 0 01-.5.5zM5 20.5c-.827 0-1.5-.673-1.5-1.5v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h3.98a.5.5 0 010 1H5zM15.02 20.5a.5.5 0 010-1H19a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .827-.673 1.5-1.5 1.5h-3.98z" />
  );

export default SvgCursorSelectFrame;
