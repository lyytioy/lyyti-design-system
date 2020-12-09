import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-shield_svg__cls-1"
      d="M23.25 5.25a7.669 7.669 0 01-6 7.5 7.669 7.669 0 01-6-7.5v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5zM17.25 4.5V9M15 6.75h4.5"
    />,
    <circle
      className="single-man-shield_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-shield_svg__cls-1"
      d="M5.25 8.25v6M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5z"
    />
  );

export default SvgSingleManShield;
