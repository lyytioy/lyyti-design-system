import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-key_svg__cls-1"
      d="M16.405 20.231a1.25 1.25 0 110-1.768 1.251 1.251 0 010 1.768z"
    />,
    <path
      className="single-man-actions-key_svg__cls-1"
      d="M19.048 17.942l4.305-4.295a.5.5 0 00.147-.354V12a.5.5 0 00-.5-.5h-1.3a.5.5 0 00-.344.137l-4.429 4.184a4 4 0 102.122 2.121zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-key_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-key_svg__cls-1"
      d="M10.5 14.5V14a5 5 0 00-10 0v3.5H3l.5 6h4l.5-6h1"
    />
  );

export default SvgSingleManActionsKey;
