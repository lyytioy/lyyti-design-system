import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.5 24c-.827 0-1.5-.673-1.5-1.5v-21C2 .673 2.673 0 3.5 0h13.293c.401 0 .777.156 1.061.439l3.707 3.707c.283.284.439.661.439 1.061V22.5c0 .827-.673 1.5-1.5 1.5h-17zm0-23a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h17a.5.5 0 00.5-.5V5.207a.501.501 0 00-.146-.354l-3.707-3.707A.505.505 0 0016.793 1H12v12a.497.497 0 01-.5.5.5.5 0 01-.354-.146L9 11.207l-2.146 2.146a.498.498 0 01-.546.109A.498.498 0 016 13V1H3.5zM9 10a.5.5 0 01.354.146L11 11.793V1H7v10.793l1.646-1.646A.496.496 0 019 10z" />
  );

export default SvgCommonFileBookmark;
