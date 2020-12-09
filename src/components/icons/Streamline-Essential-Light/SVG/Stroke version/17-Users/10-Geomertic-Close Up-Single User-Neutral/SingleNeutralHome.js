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
    <g id="single-neutral-home_svg___Group_" data-name="&lt;Group&gt;">
      <g id="single-neutral-home_svg__New_Symbol_1" data-name="New Symbol 1">
        <circle
          className="single-neutral-home_svg__cls-1"
          cx={12}
          cy={10.75}
          r={3.25}
        />
        <path
          d="M17.056 19a5.321 5.321 0 00-10 0"
          strokeWidth={0.989}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M1.5 23.5a1 1 0 01-1-1V8.8a1 1 0 01.429-.821l10.5-7.3a1 1 0 011.142 0l10.5 7.3a1 1 0 01.429.821v13.7a1 1 0 01-1 1z"
    />
  );

export default SvgSingleNeutralHome;
