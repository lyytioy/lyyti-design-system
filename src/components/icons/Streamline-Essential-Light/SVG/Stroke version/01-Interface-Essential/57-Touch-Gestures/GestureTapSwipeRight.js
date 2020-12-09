import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-right_svg__a"
      d="M21.5 12.005l2-2.5-2-2.5M1.487 14.45a6.5 6.5 0 1111.017.015"
    />,
    <path
      className="gesture-tap-swipe-right_svg__a"
      d="M3.5 20.505v-9.5a3.5 3.5 0 017 0v9.5"
    />,
    <path
      className="gesture-tap-swipe-right_svg__a"
      d="M8.5 11.005a1.5 1.5 0 00-3 0v1.5h3zM15.5 9.505h8"
    />
  );

export default SvgGestureTapSwipeRight;
