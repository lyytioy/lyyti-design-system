import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-up-down_svg__cls-1"
      d="M3.5 11V.5M.5 3.5l3-3 3 3M20.5 13v10.5M23.5 20.5l-3 3-3-3"
    />,
    <circle
      className="single-neutral-up-down_svg__cls-1"
      cx={12}
      cy={6.25}
      r={2.75}
    />,
    <path
      className="single-neutral-up-down_svg__cls-1"
      d="M15.5 13.5a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.417-5H15.5z"
    />
  );

export default SvgSingleNeutralUpDown;
