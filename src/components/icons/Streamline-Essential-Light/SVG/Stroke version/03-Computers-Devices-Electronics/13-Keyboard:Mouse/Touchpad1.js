import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchpad1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touchpad-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="touchpad-1_svg__a"
      d="M21.151 15V7.234A1.723 1.723 0 0019.5 5.5H7.173A1.742 1.742 0 005.5 7.234V17a1.67 1.67 0 001.672 1.652H10.5M5.501 8.5h15.65M3 6a3 3 0 013-3M.5 6A5.5 5.5 0 016 .5"
    />,
    <path
      className="touchpad-1_svg__a"
      d="M23.5 23.5v-2.667a3.333 3.333 0 00-3.334-3.333H18.5V13a1.5 1.5 0 00-3 0v7l-1.288-1.079a1.25 1.25 0 00-1.923 1.6l2.48 2.982"
    />
  );

export default SvgTouchpad1;
