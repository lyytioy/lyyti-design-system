import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M21.5 23.5v-7M23.5 21.5l-2 2-2-2M15.5 16.5v7M17.5 18.5l-2-2-2 2M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-up-down_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-up-down_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.474-.3"
    />
  );

export default SvgMultipleActionsUpDown;
