import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManPodium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-podium_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-podium_svg__cls-1"
      d="M21 16.5l-1.5 7M4.5 23.5l-1.5-7M1 16.5h22M6.5 14.5V14a5.5 5.5 0 1111 0v.5M11.995 11v3M9.2 2.1a5.4 5.4 0 003.884 1.65 5.4 5.4 0 002.138-.44"
    />,
    <circle
      className="single-man-podium_svg__cls-1"
      cx={12}
      cy={3.75}
      r={3.25}
    />
  );

export default SvgSingleManPodium;
