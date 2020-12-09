import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-lock_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-lock_svg__cls-1"
      x={14.5}
      y={16.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-lock_svg__cls-1"
      d="M19 19a1 1 0 101 1 1 1 0 00-1-1zM16.5 16.5V15a2.5 2.5 0 015 0v1.5M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-lock_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-lock_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-lock_svg__cls-1"
      d="M19.47 10.605A6 6 0 0013 10.3"
    />
  );

export default SvgMultipleActionsLock;
