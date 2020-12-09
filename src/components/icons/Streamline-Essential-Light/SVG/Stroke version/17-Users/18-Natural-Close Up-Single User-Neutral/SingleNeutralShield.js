import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-shield_svg__cls-1"
      d="M17.5 16.22s-2.02-.893-3.432-1.415c-.926-.345-.794-1.907-.258-2.494a4.285 4.285 0 001.259-3.532A3 3 0 0012 5.5a3 3 0 00-3.069 3.279 4.285 4.285 0 001.259 3.532c.536.587.668 2.149-.258 2.494C8.52 15.327 6.5 16.22 6.5 16.22"
    />,
    <path
      className="single-neutral-shield_svg__cls-1"
      d="M13.068 23.3l1.06-.4A13 13 0 0022.5 10.751v-6.5a2 2 0 00-1.2-1.835 23.536 23.536 0 00-18.594 0A2 2 0 001.5 4.249v6.5A13 13 0 009.872 22.9l1.06.4a2.99 2.99 0 002.136 0z"
    />
  );

export default SvgSingleNeutralShield;
