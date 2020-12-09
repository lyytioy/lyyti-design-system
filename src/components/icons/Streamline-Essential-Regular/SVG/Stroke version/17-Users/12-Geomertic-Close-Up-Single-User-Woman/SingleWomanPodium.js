import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanPodium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-podium_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-podium_svg__cls-1"
      d="M4.5 15.75h15M15.75 23.25h-7.5l-.75-7.5h9l-.75 7.5z"
    />,
    <circle
      className="single-woman-podium_svg__cls-1"
      cx={12}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-podium_svg__cls-1"
      d="M17.25 12.75c0-1.833-.94-2.7-2.364-3.636L12 12.75 9.114 9.114c-1.424.939-2.364 1.8-2.364 3.636M9 3.75S9 7.5 6.75 7.5M15 3.75s0 3.75 2.25 3.75"
    />
  );

export default SvgSingleWomanPodium;
