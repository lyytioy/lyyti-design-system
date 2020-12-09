import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-shield_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-shield_svg__cls-1"
      d="M23.25 9.937A13.5 13.5 0 0112 23.25 13.5 13.5 0 01.75 9.937V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5z"
    />,
    <circle
      className="single-man-shield_svg__cls-1"
      cx={12}
      cy={8.625}
      r={3.375}
    />,
    <path
      className="single-man-shield_svg__cls-1"
      d="M17.387 16.75a6.032 6.032 0 00-10.774 0M15.375 8.736a6.76 6.76 0 01-6.443-1.517"
    />
  );

export default SvgSingleManShield;
