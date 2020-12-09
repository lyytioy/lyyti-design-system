import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeHorizontalRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-horizontal-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-horizontal-right_svg__a"
      d="M20.479 11.506l3-.5-.5-3M8.5 18.506v-9.5a3.5 3.5 0 017 0v9.5"
    />,
    <path
      className="gesture-swipe-horizontal-right_svg__a"
      d="M13.5 9.006a1.5 1.5 0 00-3 0v1.5h3zM6.459 8.1A11.911 11.911 0 00.5 10.986M23.5 11.018a11.842 11.842 0 00-6-2.918"
    />
  );

export default SvgGestureSwipeHorizontalRight;
