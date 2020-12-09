import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man_svg__cls-1"
      d="M7.476 3.334A8.711 8.711 0 0013.75 6a8.725 8.725 0 003.45-.71"
    />,
    <circle className="single-man_svg__cls-1" cx={12} cy={6} r={5.25} />,
    <path
      className="single-man_svg__cls-1"
      d="M2.25 23.25a9.75 9.75 0 0119.5 0"
    />
  );

export default SvgSingleMan;
