import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeHorizontalLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-horizontal-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-horizontal-left_svg__a"
      d="M14.249 12.748h-1.5M9.749 23.248V12a3.75 3.75 0 117.5 0v11.25M.748.748v6h6M23.248 4.128a18 18 0 00-22.5 1.205"
    />
  );

export default SvgGestureSwipeHorizontalLeft;
