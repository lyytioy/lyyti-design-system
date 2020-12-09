import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-left_svg__a"
      d="M.75 6.748h6M4.5 2.998L.75 6.748l3.75 3.75M15.75 12.748h1.5M20.25 23.248V12a3.75 3.75 0 10-7.5 0v11.25M22.547 13.5a6.749 6.749 0 10-12.1 0"
    />
  );

export default SvgGestureTapSwipeLeft;
