import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <circle className="single-man-circle_svg__cls-1" cx={12} cy={6} r={2.25} />,
    <path
      className="single-man-circle_svg__cls-1"
      d="M13.5 20.25l.75-4.5h1.5V13.5a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 4.5zM12 9.75v3.75"
    />
  );

export default SvgSingleManCircle;
