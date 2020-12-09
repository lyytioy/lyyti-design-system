import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeVerticalUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-vertical-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-vertical-up_svg__a"
      d="M11.249 14.248v-1.5M.749 9.748H12a3.75 3.75 0 010 7.5H.749M23.249.748h-6v6M19.869 23.248a18 18 0 00-1.2-22.5"
    />
  );

export default SvgGestureSwipeVerticalUp;
