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
    <path
      className="single-man-circle_svg__cls-1"
      d="M7.476 7.084A8.711 8.711 0 0013.75 9.75a8.725 8.725 0 003.45-.71"
    />,
    <circle
      className="single-man-circle_svg__cls-1"
      cx={12}
      cy={9.75}
      r={5.25}
    />,
    <path
      className="single-man-circle_svg__cls-1"
      d="M18.913 20.876a9.746 9.746 0 00-13.826 0"
    />,
    <circle
      className="single-man-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.25}
    />
  );

export default SvgSingleManCircle;
