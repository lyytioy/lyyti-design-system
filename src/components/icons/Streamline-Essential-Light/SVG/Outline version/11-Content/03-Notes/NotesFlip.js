import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesFlip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 24c-.827 0-1.5-.673-1.5-1.5v-19C1 2.673 1.673 2 2.5 2H4V.5a.5.5 0 011 0V2h4V.5a.5.5 0 011 0V2h4V.5a.5.5 0 011 0V2h4V.5a.5.5 0 011 0V2h1.5c.827 0 1.5.673 1.5 1.5v14c0 .066-.013.13-.039.191a.477.477 0 01-.109.163l-5.999 5.999A.496.496 0 0116.5 24h-14zm0-21a.5.5 0 00-.5.5v19a.5.5 0 00.5.5H16v-4.5c0-.827.673-1.5 1.5-1.5H22V3.5a.5.5 0 00-.5-.5H20v2a.5.5 0 01-1 0V3h-4v2a.5.5 0 01-1 0V3h-4v2a.5.5 0 01-1 0V3H5v2a.5.5 0 01-1 0V3H2.5zm15 15a.5.5 0 00-.5.5v3.793L21.293 18H17.5z" />
  );

export default SvgNotesFlip;
