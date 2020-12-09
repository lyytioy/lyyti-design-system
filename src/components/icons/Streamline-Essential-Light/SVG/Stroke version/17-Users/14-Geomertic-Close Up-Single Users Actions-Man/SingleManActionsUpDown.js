import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsUpDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-up-down_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-up-down_svg__cls-1"
      d="M11.5 20.5l3 3 3-3M14.5 23.5v-9M17.5 17.5l3-3 3 3M20.5 14.5v9M11.5 17.5H.5A7 7 0 0112 12.138M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-up-down_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsUpDown;
