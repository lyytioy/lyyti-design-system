import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-down_svg__a"
      d="M11.996 21.505l2.5 2 2.5-2M9.551 1.491a6.5 6.5 0 11-.015 11.016"
    />,
    <path
      className="gesture-tap-swipe-down_svg__a"
      d="M3.5 3.505H13a3.5 3.5 0 010 7H3.5"
    />,
    <path
      className="gesture-tap-swipe-down_svg__a"
      d="M13 8.505a1.5 1.5 0 100-3h-1.5v3zM14.496 15.505v8"
    />
  );

export default SvgGestureTapSwipeDown;
