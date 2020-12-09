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
      <path
        className="single-neutral-shield_svg__cls-1"
        d="M17.5 2.5v6M20.5 5.5h-6M18.035 12.4l.553-.21c2.63-1 4.912-3.524 4.912-6.338V2.456a1.044 1.044 0 00-.628-.958 15.814 15.814 0 00-5.394-1 15.521 15.521 0 00-5.35 1 1.044 1.044 0 00-.628.958v3.393c0 2.814 2.238 5.336 4.868 6.338l.553.21a1.561 1.561 0 001.114.003z"
      />
    </g>,
    <path
      className="single-neutral-shield_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-shield_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralShield;
