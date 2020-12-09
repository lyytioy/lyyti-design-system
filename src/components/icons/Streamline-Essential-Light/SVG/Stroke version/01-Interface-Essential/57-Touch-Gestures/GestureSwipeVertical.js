import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-vertical_svg__a"
      d="M4.5 8.506H14a3.5 3.5 0 110 7H4.5M13.498.506v5M10.998 2.506l2.5-2 2.5 2M13.498 23.506v-5M10.998 21.506l2.5 2 2.5-2"
    />,
    <path
      className="gesture-swipe-vertical_svg__a"
      d="M14 13.506a1.5 1.5 0 000-3h-1.5v3z"
    />
  );

export default SvgGestureSwipeVertical;
