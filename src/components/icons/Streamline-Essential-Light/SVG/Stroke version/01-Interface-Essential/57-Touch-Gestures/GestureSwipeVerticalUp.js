import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeVerticalUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-vertical-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-vertical-up_svg__a"
      d="M12.241 3.512l.753-2.988 3 .5M5.494 15.506h9.5a3.5 3.5 0 000-7h-9.5"
    />,
    <path
      className="gesture-swipe-vertical-up_svg__a"
      d="M14.994 10.506a1.5 1.5 0 010 3h-1.5v-3zM15.905 17.543a11.907 11.907 0 01-2.89 5.963M12.982.506A11.83 11.83 0 0115.9 6.5"
    />
  );

export default SvgGestureSwipeVerticalUp;
