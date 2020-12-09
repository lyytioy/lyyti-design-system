import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralProtect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-protect_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-protect_svg__cls-1"
      d="M23.25 9.937A13.5 13.5 0 0112 23.25 13.5 13.5 0 01.75 9.937V2.25a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5z"
    />,
    <circle
      className="single-neutral-protect_svg__cls-1"
      cx={12}
      cy={6}
      r={2.25}
    />,
    <path
      className="single-neutral-protect_svg__cls-1"
      d="M13.5 18.75l.75-4.5h1.5v-.75a3.75 3.75 0 00-7.5 0v.75h1.5l.75 4.5z"
    />
  );

export default SvgSingleNeutralProtect;
