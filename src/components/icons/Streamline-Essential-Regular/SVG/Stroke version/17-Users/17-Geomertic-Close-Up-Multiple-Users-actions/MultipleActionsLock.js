import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-lock_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-lock_svg__cls-1"
      d="M12.75 14.25a6 6 0 00-6-5.25 6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-lock_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-lock_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-lock_svg__cls-1"
      d="M19.888 8.29a4.5 4.5 0 00-6.776 0"
    />,
    <rect
      className="multiple-actions-lock_svg__cls-1"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="multiple-actions-lock_svg__cls-1"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgMultipleActionsLock;
