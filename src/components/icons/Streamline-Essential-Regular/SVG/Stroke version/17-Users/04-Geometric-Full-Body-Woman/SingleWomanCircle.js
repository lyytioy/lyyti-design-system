import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={6}
      r={2.25}
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M14.25 10.5L12 12.75 9.75 10.5a3.743 3.743 0 00-1.5 3v2.25h1.5l.75 4.5h3l.75-4.5h1.5V13.5a3.743 3.743 0 00-1.5-3zM9.75 6s0 2.25-1.5 2.25M14.25 6s0 2.25 1.5 2.25"
    />
  );

export default SvgSingleWomanCircle;
