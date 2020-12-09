import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManIdCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-id-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M9.75 3.75h-4.5a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5h-4.5"
    />,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M14.25 3a2.25 2.25 0 00-4.5 0v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75z"
    />,
    <circle
      className="single-man-id-card_svg__cls-1"
      cx={12}
      cy={13.125}
      r={3.375}
    />,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M18 23.25a6.054 6.054 0 00-12 0M15.365 12.864a6.763 6.763 0 01-6.3-1.4"
    />
  );

export default SvgSingleManIdCard;
