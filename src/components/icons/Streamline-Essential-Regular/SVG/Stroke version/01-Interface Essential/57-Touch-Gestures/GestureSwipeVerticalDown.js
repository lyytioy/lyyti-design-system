import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeVerticalDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-vertical-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-vertical-down_svg__a"
      d="M11.249 11.248v-1.5M.749 6.748H12a3.75 3.75 0 110 7.5H.749M23.249 23.248h-6v-6M19.869.748a18 18 0 01-1.2 22.5"
    />
  );

export default SvgGestureSwipeVerticalDown;
