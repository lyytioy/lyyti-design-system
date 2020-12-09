import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-horizontal_svg__a"
      d="M12.748 14.248h-1.5M8.248 17.248V13.5a3.75 3.75 0 017.5 0v3.75M2.998 9.748l-2.25 2.25 2.25 2.25M20.998 9.748l2.25 2.25-2.25 2.25M5.95 16.5a6.75 6.75 0 1112.1 0"
    />
  );

export default SvgGestureTapSwipeHorizontal;
