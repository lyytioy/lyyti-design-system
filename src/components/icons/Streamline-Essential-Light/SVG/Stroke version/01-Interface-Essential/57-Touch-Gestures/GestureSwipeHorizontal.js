import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureSwipeHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-swipe-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-swipe-horizontal_svg__a"
      d="M8.5 20.506v-9.5a3.5 3.5 0 017 0v9.5M.499 11.506h5M2.499 14.006l-2-2.5 2-2.5M23.499 11.506h-5M21.499 14.006l2-2.5-2-2.5"
    />,
    <path
      className="gesture-swipe-horizontal_svg__a"
      d="M13.5 11.006a1.5 1.5 0 00-3 0v1.5h3z"
    />
  );

export default SvgGestureSwipeHorizontal;
