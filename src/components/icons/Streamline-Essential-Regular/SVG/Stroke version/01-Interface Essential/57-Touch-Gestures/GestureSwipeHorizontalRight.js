import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeHorizontalRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-horizontal-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-horizontal-right_svg__a"
      d="M11.249 12.748h-1.5M6.749 23.248V12a3.75 3.75 0 117.5 0v11.25M23.249.748v6h-6M.749 4.128a18 18 0 0122.5 1.205"
    />
  );

export default SvgGestureSwipeHorizontalRight;
