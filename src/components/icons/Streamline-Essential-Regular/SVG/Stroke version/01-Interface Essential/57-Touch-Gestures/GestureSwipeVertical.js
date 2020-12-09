import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-vertical_svg__a"
      d="M17 .748v4.5M20.75 4.498L17 .748l-3.75 3.75M17 18.748v4.5M20.75 19.498L17 23.248l-3.75-3.75M14 12.748v-1.5M3.25 8.248h11.5a3.75 3.75 0 010 7.5H3.266"
    />
  );

export default SvgGestureSwipeVertical;
