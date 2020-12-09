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
      d="M10.781 10.513A6.048 6.048 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71M11.25 20.25l3 3 3-3M14.25 23.25v-9M17.25 17.25l3-3 3 3M20.25 14.25v9"
    />
  );

export default SvgMultipleActionsUpDown;
