import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-right_svg__a"
      d="M23.25 6.748h-6M19.5 2.998l3.75 3.75-3.75 3.75M8.25 12.748h-1.5M3.75 23.248V12a3.75 3.75 0 117.5 0v11.25M1.452 13.5a6.75 6.75 0 1112.1 0"
    />
  );

export default SvgGestureTapSwipeRight;
