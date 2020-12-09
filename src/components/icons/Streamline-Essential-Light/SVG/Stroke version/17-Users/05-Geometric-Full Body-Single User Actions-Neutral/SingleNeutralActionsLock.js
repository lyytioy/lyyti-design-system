import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-lock_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-lock_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-actions-lock_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <rect
      className="single-neutral-actions-lock_svg__cls-1"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <path
      className="single-neutral-actions-lock_svg__cls-1"
      d="M19 11.5a3 3 0 00-3 3v1h6v-1a3 3 0 00-3-3z"
    />,
    <circle
      className="single-neutral-actions-lock_svg__cls-1"
      cx={19}
      cy={19.563}
      r={1.25}
    />
  );

export default SvgSingleNeutralActionsLock;
