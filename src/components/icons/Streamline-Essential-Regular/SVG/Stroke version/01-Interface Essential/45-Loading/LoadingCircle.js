import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="loading-circle_svg__a"
      d="M5.814 4.253L7.578 6.68M2 9.503l2.853.927M2 15.992l2.853-.927M5.814 21.242l1.764-2.427M11.986 23.247v-3M18.158 21.242l-1.764-2.427M21.972 15.992l-2.853-.927M21.972 9.503l-2.853.927M18.158 4.253L16.394 6.68M11.986.747v6"
    />
  );

export default SvgLoadingCircle;
