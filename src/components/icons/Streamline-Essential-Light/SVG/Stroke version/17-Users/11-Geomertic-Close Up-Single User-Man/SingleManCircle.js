import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="single-man-circle_svg__cls-1"
      d="M8.338 6.592a7.062 7.062 0 007.873 1.583"
    />,
    <circle
      className="single-man-circle_svg__cls-1"
      cx={12}
      cy={8.75}
      r={4.25}
    />,
    <path
      className="single-man-circle_svg__cls-1"
      d="M18.317 18.5a6.988 6.988 0 00-12.634 0"
    />
  );

export default SvgSingleManCircle;
