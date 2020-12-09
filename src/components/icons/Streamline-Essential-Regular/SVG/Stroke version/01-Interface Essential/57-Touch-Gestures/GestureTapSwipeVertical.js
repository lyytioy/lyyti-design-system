import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapSwipeVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-swipe-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-swipe-vertical_svg__a"
      d="M9.748 12.748v-1.5M6.748 8.248H10.5a3.75 3.75 0 010 7.5H6.748M14.248 2.998l-2.25-2.25-2.25 2.25M14.248 20.998l-2.25 2.25-2.25-2.25M7.5 5.95a6.75 6.75 0 110 12.1"
    />
  );

export default SvgGestureTapSwipeVertical;
