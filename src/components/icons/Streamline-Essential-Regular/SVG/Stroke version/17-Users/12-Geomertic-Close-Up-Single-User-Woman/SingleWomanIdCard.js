import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanIdCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-id-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-id-card_svg__cls-1"
      d="M9.75 3.75h-4.5a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5h-4.5"
    />,
    <path
      className="single-woman-id-card_svg__cls-1"
      d="M14.25 3a2.25 2.25 0 00-4.5 0v3a.75.75 0 00.75.75h3a.75.75 0 00.75-.75zM16.354 23.25a4.52 4.52 0 00-2.513-5.216L12 20.625l-1.841-2.591a4.522 4.522 0 00-2.514 5.216"
    />,
    <circle
      className="single-woman-id-card_svg__cls-1"
      cx={12}
      cy={13.125}
      r={3}
    />,
    <path
      className="single-woman-id-card_svg__cls-1"
      d="M9 13.125s0 3.75-2.25 3.75M15 13.125s0 3.75 2.25 3.75"
    />
  );

export default SvgSingleWomanIdCard;
