import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-horizontal_svg__a"
      d="M.75 9.748h4.5M4.5 5.998L.75 9.748l3.75 3.75M18.75 9.748h4.5M19.5 5.998l3.75 3.75-3.75 3.75M12.75 12.748h-1.5M8.25 23.248V12a3.75 3.75 0 117.5 0v11.25"
    />
  );

export default SvgGestureSwipeHorizontal;
