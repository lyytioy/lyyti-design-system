import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesPaper = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h21c.827 0 1.5.673 1.5 1.5v15a.504.504 0 01-.147.353l-7 7A.495.495 0 0116.5 24h-15zm0-23a.5.5 0 00-.5.5v21a.5.5 0 00.5.5H16v-5.5c0-.827.673-1.5 1.5-1.5H23V1.5a.5.5 0 00-.5-.5h-21zm16 16a.5.5 0 00-.5.5v4.793L22.293 17H17.5z" />
  );

export default SvgNotesPaper;
