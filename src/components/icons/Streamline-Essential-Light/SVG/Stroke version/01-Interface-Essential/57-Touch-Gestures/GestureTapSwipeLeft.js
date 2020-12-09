import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-left_svg__a"
      d="M2.499 12.005l-2-2.5 2-2.5M22.512 14.45a6.5 6.5 0 10-11.016.015"
    />,
    <path
      className="gesture-tap-swipe-left_svg__a"
      d="M20.5 20.505v-9.5a3.5 3.5 0 10-7 0v9.5"
    />,
    <path
      className="gesture-tap-swipe-left_svg__a"
      d="M15.5 11.005a1.5 1.5 0 013 0v1.5h-3zM8.499 9.505h-8"
    />
  );

export default SvgGestureTapSwipeLeft;
