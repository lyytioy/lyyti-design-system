import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-up_svg__a"
      d="M17.25.748v6M21 4.498L17.25.748l-3.75 3.75M11.25 15.748v1.5M.75 20.248H12a3.75 3.75 0 000-7.5H.75M10.5 22.546a6.75 6.75 0 100-12.1"
    />
  );

export default SvgGestureTapSwipeUp;
