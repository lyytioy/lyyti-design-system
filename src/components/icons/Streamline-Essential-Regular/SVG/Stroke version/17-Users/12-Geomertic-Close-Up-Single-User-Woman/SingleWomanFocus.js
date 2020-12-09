import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-focus_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-focus_svg__cls-1"
      d="M.75 6.751V2.25a1.5 1.5 0 011.5-1.5h4.5M23.25 6.751V2.25a1.5 1.5 0 00-1.5-1.5h-4.5M.75 17.25v4.5a1.5 1.5 0 001.5 1.5h4.5M23.25 17.25v4.5a1.5 1.5 0 01-1.5 1.5h-4.5M7.888 8.955a6.006 6.006 0 01-.871 3.3M16.112 8.955a6.006 6.006 0 00.871 3.3M7.888 8.955A5.487 5.487 0 0012 7.055a5.487 5.487 0 004.112 1.9"
    />,
    <circle
      className="single-woman-focus_svg__cls-1"
      cx={12}
      cy={8.625}
      r={4.125}
    />,
    <path
      className="single-woman-focus_svg__cls-1"
      d="M18.337 18.75a6.712 6.712 0 00-12.674 0"
    />
  );

export default SvgSingleWomanFocus;
