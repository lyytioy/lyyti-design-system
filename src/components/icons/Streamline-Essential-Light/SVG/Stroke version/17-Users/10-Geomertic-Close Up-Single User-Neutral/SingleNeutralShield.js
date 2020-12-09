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
    <g id="single-neutral-shield_svg___Group_" data-name="&lt;Group&gt;">
      <g id="single-neutral-shield_svg__New_Symbol_1" data-name="New Symbol 1">
        <circle
          className="single-neutral-shield_svg__cls-1"
          cx={12}
          cy={7.75}
          r={3.25}
        />
        <path
          d="M17.056 16a5.321 5.321 0 00-10 0"
          strokeWidth={0.989}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>,
    <path
      className="single-neutral-shield_svg__cls-1"
      d="M23.5 9.125A14.7 14.7 0 0112 23.5 14.7 14.7 0 01.5 9.125V1.5a1 1 0 011-1h21a1 1 0 011 1z"
    />
  );

export default SvgSingleNeutralShield;
