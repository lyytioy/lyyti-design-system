import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M11.25 20.25l3 3 3-3M14.25 23.25v-9M17.25 17.25l3-3 3 3M20.25 14.25v9"
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M10.743 11.245A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.522-5.216"
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsUpDown;
