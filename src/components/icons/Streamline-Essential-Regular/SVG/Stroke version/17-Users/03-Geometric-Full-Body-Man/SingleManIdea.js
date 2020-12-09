import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-idea_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-idea_svg__cls-1"
      cx={5.625}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-idea_svg__cls-1"
      d="M5.625 8.25v6M7.875 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM19.125 9.75V12M22.875 4.5a3.75 3.75 0 10-5.25 3.437V9.75h3V7.937a3.751 3.751 0 002.25-3.437z"
    />
  );

export default SvgSingleManIdea;
