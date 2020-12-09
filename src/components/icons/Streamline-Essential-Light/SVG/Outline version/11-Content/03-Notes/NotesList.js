import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesList = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 20c-.827 0-1.5-.673-1.5-1.5v-17C2 .673 2.673 0 3.5 0h17c.827 0 1.5.673 1.5 1.5v11c0 .066-.013.13-.039.191a.477.477 0 01-.109.163l-6.999 6.999A.496.496 0 0114.5 20h-11zm0-19a.5.5 0 00-.5.5v17a.5.5 0 00.5.5H14v-5.5c0-.827.673-1.5 1.5-1.5H21V1.5a.5.5 0 00-.5-.5h-17zm12 12a.5.5 0 00-.5.5v4.793L20.293 13H15.5zM3 22a.5.5 0 010-1h16.5a.5.5 0 010 1H3zM3 24a.5.5 0 010-1h16.5a.5.5 0 010 1H3z" />
  );

export default SvgNotesList;
