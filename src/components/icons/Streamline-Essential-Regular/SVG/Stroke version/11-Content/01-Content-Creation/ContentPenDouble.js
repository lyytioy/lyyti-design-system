import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPenDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pen-double_svg__a"
      d="M17.735 10.5l4.636-4.629a3 3 0 10-4.242-4.242L13.5 6.25M5.5 14.25l-.637.637a1.5 1.5 0 000 2.121l2.125 2.122a1.5 1.5 0 002.121 0l.38-.38"
    />,
    <path
      className="content-pen-double_svg__a"
      d="M22.371 5.871a3 3 0 010 4.243l-1.364 1.364M5.914 18.056a2.314 2.314 0 00-3.247.065C1.762 19.026.75 23.25.75 23.25s4.194-1.042 5.1-1.947a2.313 2.313 0 00.064-3.247zM5.875 1.629l14.319 14.319-4.243 4.242L1.746 5.985a3.112 3.112 0 01-.441-3.971 3 3 0 014.57-.385z"
    />,
    <path
      className="content-pen-double_svg__a"
      d="M1.632 5.871a3 3 0 000 4.243L3 11.485M6.952 11.191l4.243-4.242M23.25 23.25l-3.056-7.302-4.243 4.242 7.299 3.06z"
    />
  );

export default SvgContentPenDouble;
