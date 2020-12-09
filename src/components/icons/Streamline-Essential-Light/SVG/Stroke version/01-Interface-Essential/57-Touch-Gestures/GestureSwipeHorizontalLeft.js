import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeHorizontalLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-horizontal-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-horizontal-left_svg__a"
      d="M3.501 11.506l-2.988-.5.5-3M15.5 18.506v-9.5a3.5 3.5 0 00-7 0v9.5"
    />,
    <path
      className="gesture-swipe-horizontal-left_svg__a"
      d="M10.5 9.006a1.5 1.5 0 013 0v1.5h-3zM17.532 8.1a11.907 11.907 0 015.968 2.886M.5 11.018A11.85 11.85 0 016.489 8.1"
    />
  );

export default SvgGestureSwipeHorizontalLeft;
