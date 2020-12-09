import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-lock_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-lock_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-lock_svg__cls-1"
      d="M12.21 12.425A6.743 6.743 0 00.75 17.25"
    />,
    <rect
      className="single-neutral-actions-lock_svg__cls-1"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-neutral-actions-lock_svg__cls-1"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />
  );

export default SvgSingleNeutralActionsLock;
