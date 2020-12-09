import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-home_svg__cls-1"
      cx={12}
      cy={8.25}
      r={2.75}
    />,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M15.5 15.5a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.417-5H15.5z"
    />,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M7.5 23.5h-6a1 1 0 01-1-1V8.8a1 1 0 01.429-.821l10.5-7.3a1 1 0 011.142 0l10.5 7.3a1 1 0 01.429.821v13.7a1 1 0 01-1 1h-6"
    />
  );

export default SvgSingleNeutralHome;
