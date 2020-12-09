import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanIdea = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-idea_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-idea_svg__cls-1"
      d="M19.125 9.75V12M22.875 4.5a3.75 3.75 0 10-5.25 3.437V9.75h3V7.937a3.751 3.751 0 002.25-3.437z"
    />,
    <circle
      className="single-woman-idea_svg__cls-1"
      cx={5.625}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-idea_svg__cls-1"
      d="M8.409 9.216L5.625 12.75 2.841 9.216a4.489 4.489 0 00-1.716 3.534v3h1.5l.75 7.5h4.5l.75-7.5h1.5v-3a4.489 4.489 0 00-1.716-3.534zM2.625 3.75s0 3-1.5 3M8.625 3.75s0 3 1.5 3"
    />
  );

export default SvgSingleWomanIdea;
