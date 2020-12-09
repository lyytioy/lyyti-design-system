import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="single-woman_svg__cls-1" cx={12} cy={3.75} r={3} />,
    <path
      className="single-woman_svg__cls-1"
      d="M14.25 23.25l.75-7.5h2.25V13.5a5.246 5.246 0 00-2.364-4.386L12 13.5 9.114 9.114A5.246 5.246 0 006.75 13.5v2.25H9l.75 7.5zM9 3.75S9 7.5 6.75 7.5M15 3.75s0 3.75 2.25 3.75"
    />
  );

export default SvgSingleWoman;
