import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M8.794 6.286A4.306 4.306 0 0012 4.8a4.306 4.306 0 003.206 1.489"
    />,
    <circle
      className="single-woman-circle_svg__cls-1"
      cx={12}
      cy={5.75}
      r={3.25}
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M14 21l.5-2.5H17l-1.754-5.614a3.4 3.4 0 00-6.492 0L7 18.5h2.5L10 21"
    />,
    <path
      className="single-woman-circle_svg__cls-1"
      d="M13.9 11.08L12 14.5l-1.9-3.42"
    />
  );

export default SvgSingleWomanCircle;
