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
      d="M9.2 4.725a5.4 5.4 0 006.022 1.21"
    />,
    <circle
      className="single-man-circle_svg__cls-1"
      cx={12}
      cy={6.375}
      r={3.25}
    />,
    <path
      className="single-man-circle_svg__cls-1"
      d="M14.045 21.125l.455-2.5h2v-3a4.5 4.5 0 00-9 0v3h2l.455 2.5M12 13.5v3"
    />
  );

export default SvgSingleManCircle;
