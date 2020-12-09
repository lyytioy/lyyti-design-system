import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-up-down_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-up-down_svg__cls-1"
      d="M.75 17.25a6.75 6.75 0 0111.243-5.037M11.25 20.25l3 3 3-3M14.25 23.25v-9M17.25 17.25l3-3 3 3M20.25 14.25v9"
    />
  );

export default SvgSingleNeutralActionsUpDown;
