import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-sync_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-sync_svg__cls-1"
      d="M23.5 13.5v4h-4M23.4 17.5a5 5 0 10-.9 4M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-sync_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-sync_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-sync_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.476-.3"
    />
  );

export default SvgMultipleActionsSync;
