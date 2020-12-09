import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralProtect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-protect_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-protect_svg__cls-1"
      d="M13.068 23.3l1.06-.4A13 13 0 0022.5 10.751v-6.5a2 2 0 00-1.2-1.835 23.536 23.536 0 00-18.594 0A2 2 0 001.5 4.249v6.5A13 13 0 009.872 22.9l1.06.4a2.99 2.99 0 002.136 0z"
    />,
    <circle
      className="single-neutral-protect_svg__cls-1"
      cx={12}
      cy={6.5}
      r={2}
    />,
    <path
      className="single-neutral-protect_svg__cls-1"
      d="M13.111 19l.389-3.5H15v-3a3 3 0 00-6 0v3h1.5l.389 3.5"
    />
  );

export default SvgSingleNeutralProtect;
