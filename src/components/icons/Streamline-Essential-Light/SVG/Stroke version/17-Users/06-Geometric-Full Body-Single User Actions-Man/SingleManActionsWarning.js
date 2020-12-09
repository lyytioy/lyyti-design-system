import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-warning_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-warning_svg__cls-1"
      d="M10.013 11.845A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsWarning;
