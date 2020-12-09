import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 21C.673 21 0 20.327 0 19.5v-15C0 3.673.673 3 1.5 3h17.293c.401 0 .777.156 1.061.439l3.707 3.707c.283.284.439.661.439 1.061V19.5c0 .827-.673 1.5-1.5 1.5h-21zm0-17a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V8.207a.501.501 0 00-.146-.354l-3.707-3.707A.505.505 0 0018.793 4H1.5z" />
  );

export default SvgCommonFileHorizontal;
