import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="single-man_svg__cls-1" d="M3 22.75a9 9 0 0118 0z" />,
    <circle className="single-man_svg__cls-1" cx={12} cy={6.75} r={5.5} />,
    <path
      className="single-man_svg__cls-1"
      d="M7.261 3.958a9.124 9.124 0 006.572 2.792 9.138 9.138 0 003.617-.744"
    />
  );

export default SvgSingleMan;
