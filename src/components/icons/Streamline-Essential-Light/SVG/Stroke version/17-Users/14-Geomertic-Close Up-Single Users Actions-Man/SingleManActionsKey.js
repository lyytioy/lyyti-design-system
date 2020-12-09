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
      d="M19.048 17.942l4.305-4.295a.5.5 0 00.147-.354V12a.5.5 0 00-.5-.5h-1.3a.5.5 0 00-.344.137l-4.429 4.184a4 4 0 102.122 2.121zM8.5 17.5h-8A7 7 0 0112.862 13M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-key_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsKey;
