import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralIncrease = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-increase_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <g id="single-neutral-increase_svg___Group_" data-name="&lt;Group&gt;">
      <path
        className="single-neutral-increase_svg__cls-1"
        d="M23.5 5.5v-5h-5"
      />
      <path
        className="single-neutral-increase_svg__cls-1"
        d="M23.5.5l-4.924 5.819a1 1 0 01-1.318.186l-1.495-1a1 1 0 00-1.336.207L11.488 9.39"
      />
    </g>,
    <path
      className="single-neutral-increase_svg__cls-1"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle
      className="single-neutral-increase_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleNeutralIncrease;
