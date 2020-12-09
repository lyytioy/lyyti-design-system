import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-up_svg__a"
      d="M11.998 2.505l2.5-2 2.5 2M9.552 22.517A6.5 6.5 0 109.537 11.5"
    />,
    <path
      className="gesture-tap-swipe-up_svg__a"
      d="M3.5 20.505H13a3.5 3.5 0 100-7H3.5"
    />,
    <path
      className="gesture-tap-swipe-up_svg__a"
      d="M13 15.505a1.5 1.5 0 110 3h-1.5v-3zM14.498 8.505v-8"
    />
  );

export default SvgGestureTapSwipeUp;
