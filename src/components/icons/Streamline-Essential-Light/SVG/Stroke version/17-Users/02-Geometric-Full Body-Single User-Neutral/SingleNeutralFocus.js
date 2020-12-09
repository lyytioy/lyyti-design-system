import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-focus_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-focus_svg__cls-1"
      d="M7.5 23.5h-6a1 1 0 01-1-1v-6M7.5.5h-6a1 1 0 00-1 1v6M16.5 23.5h6a1 1 0 001-1v-6M16.5.5h6a1 1 0 011 1v6"
    />,
    <circle
      className="single-neutral-focus_svg__cls-1"
      cx={12}
      cy={6.251}
      r={2.75}
    />,
    <path
      className="single-neutral-focus_svg__cls-1"
      d="M15.5 13.5a3.5 3.5 0 10-7 0v3h1.583l.417 5h3l.417-5H15.5z"
    />
  );

export default SvgSingleNeutralFocus;
