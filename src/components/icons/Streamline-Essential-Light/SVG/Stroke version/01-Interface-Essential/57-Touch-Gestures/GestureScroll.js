import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureScroll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-scroll_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-scroll_svg__a"
      d="M11.496.504v4.5M8.996 2.504l2.5-2 2.5 2M11.496 23.504v-4.5M8.996 21.504l2.5 2 2.5-2M4.5 16.5V12a3.5 3.5 0 017 0v4.5"
    />,
    <path
      className="gesture-scroll_svg__a"
      d="M9.5 12a1.5 1.5 0 00-3 0v1.5h3zM11.5 16.5V12a3.5 3.5 0 117 0v4.5"
    />,
    <path
      className="gesture-scroll_svg__a"
      d="M16.5 12a1.5 1.5 0 10-3 0v1.5h3z"
    />
  );

export default SvgGestureScroll;
