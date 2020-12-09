import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-man_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-man_svg__cls-1"
      d="M.75 20.25a6.75 6.75 0 0113.5 0M3.945 5.781a6.857 6.857 0 007.642 1.536"
    />,
    <circle
      className="multiple-man_svg__cls-1"
      cx={7.5}
      cy={7.875}
      r={4.125}
    />,
    <path
      className="multiple-man_svg__cls-1"
      d="M14.251 4.416a4.125 4.125 0 11-.006 6.914M15 13.667a6.757 6.757 0 018.25 6.583"
    />,
    <path
      className="multiple-man_svg__cls-1"
      d="M14.248 6.834a6.807 6.807 0 003.627 1.041 6.843 6.843 0 002.712-.558"
    />
  );

export default SvgMultipleMan;
