import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManDecrease = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-decrease_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="single-man-decrease_svg__cls-1" d="M23.5 5.5v5h-5" />,
    <path
      className="single-man-decrease_svg__cls-1"
      d="M23.5 10.5l-4.924-5.819a1 1 0 00-1.318-.187l-1.495 1a1 1 0 01-1.336-.207L11 1M5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-decrease_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />
  );

export default SvgSingleManDecrease;
