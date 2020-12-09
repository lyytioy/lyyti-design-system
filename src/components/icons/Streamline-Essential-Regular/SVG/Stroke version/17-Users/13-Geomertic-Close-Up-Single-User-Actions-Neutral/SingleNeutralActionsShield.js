import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-shield_svg__cls-1"
      d="M.75 17.25A6.75 6.75 0 017.5 10.5a6.9 6.9 0 01.855.053"
    />,
    <circle
      className="single-neutral-actions-shield_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-shield_svg__cls-1"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.668 7.668 0 01-6-7.5v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5zM17.25 15v4.5M15 17.25h4.5"
    />
  );

export default SvgSingleNeutralActionsShield;
