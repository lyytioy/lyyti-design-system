import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-home_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M23.25 23.25V12L12 .75.75 12v11.25"
    />,
    <circle
      className="single-neutral-home_svg__cls-1"
      cx={12}
      cy={9}
      r={2.25}
    />,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M13.5 23.25l.75-4.5h1.5V16.5a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 4.5z"
    />
  );

export default SvgSingleNeutralHome;
