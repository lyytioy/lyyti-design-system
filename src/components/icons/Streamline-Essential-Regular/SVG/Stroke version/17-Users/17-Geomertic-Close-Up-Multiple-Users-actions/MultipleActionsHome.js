import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-home_svg__cls-1"
      d="M10.781 10.513A6.049 6.049 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-home_svg__cls-1"
      cx={6.75}
      cy={4.124}
      r={3.375}
    />,
    <circle
      className="multiple-actions-home_svg__cls-1"
      cx={16.5}
      cy={3.374}
      r={2.625}
    />,
    <path
      className="multiple-actions-home_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.709M12.75 15.947v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="multiple-actions-home_svg__cls-1"
      d="M11.25 17.26l4.518-3.954a2.25 2.25 0 012.963 0l4.519 3.954M18.75 23.249h-3v-3a1.5 1.5 0 113 0z"
    />
  );

export default SvgMultipleActionsHome;
