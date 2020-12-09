import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-focus_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-focus_svg__cls-1"
      d="M.75 6.751V2.25a1.5 1.5 0 011.5-1.5h4.5M23.25 6.751V2.25a1.5 1.5 0 00-1.5-1.5h-4.5M.75 17.25v4.5a1.5 1.5 0 001.5 1.5h4.5M23.25 17.25v4.5a1.5 1.5 0 01-1.5 1.5h-4.5"
    />,
    <circle
      className="single-neutral-focus_svg__cls-1"
      cx={12}
      cy={6}
      r={2.25}
    />,
    <path
      className="single-neutral-focus_svg__cls-1"
      d="M13.5 20.25l.75-4.5h1.5V13.5a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 4.5z"
    />
  );

export default SvgSingleNeutralFocus;
