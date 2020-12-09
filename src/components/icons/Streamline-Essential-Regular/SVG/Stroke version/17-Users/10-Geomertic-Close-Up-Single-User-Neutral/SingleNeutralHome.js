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
      cy={13.125}
      r={4.125}
    />,
    <path
      className="single-neutral-home_svg__cls-1"
      d="M18.365 23.25a6.751 6.751 0 00-12.73 0"
    />
  );

export default SvgSingleNeutralHome;
