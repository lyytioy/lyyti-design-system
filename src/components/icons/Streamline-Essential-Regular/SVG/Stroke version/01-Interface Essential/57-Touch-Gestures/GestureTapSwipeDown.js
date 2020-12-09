import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-down_svg__a"
      d="M17.249 23.248v-6M20.999 19.498l-3.75 3.75-3.75-3.75M11.249 8.248v-1.5M.749 3.748H12a3.75 3.75 0 110 7.5H.749M10.5 1.451a6.749 6.749 0 110 12.1"
    />
  );

export default SvgGestureTapSwipeDown;
