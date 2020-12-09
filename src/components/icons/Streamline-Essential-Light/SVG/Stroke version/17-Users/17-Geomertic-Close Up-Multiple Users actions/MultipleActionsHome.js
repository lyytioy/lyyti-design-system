import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-home_svg__cls-1"
      d="M16.5 23.5V21a1.5 1.5 0 013 0v2.5"
    />,
    <path
      className="multiple-actions-home_svg__cls-1"
      d="M14.5 17.682V23a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-5.318"
    />,
    <path
      className="multiple-actions-home_svg__cls-1"
      d="M12.5 19.5l5.164-4.694a.5.5 0 01.672 0L23.5 19.5M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-home_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-home_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-home_svg__cls-1"
      d="M19.47 10.605A6.005 6.005 0 0013 10.3"
    />
  );

export default SvgMultipleActionsHome;
