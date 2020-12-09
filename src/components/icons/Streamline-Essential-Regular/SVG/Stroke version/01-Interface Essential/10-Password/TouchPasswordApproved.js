import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchPasswordApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-password-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-password-approved_svg__a"
      d="M20.25 4.5L16.5 9l-2.25-2.25"
    />,
    <path
      className="touch-password-approved_svg__a"
      d="M3.75 12h-1.5a1.5 1.5 0 01-1.5-1.5V3a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-9"
    />,
    <path
      className="touch-password-approved_svg__a"
      d="M5.25 22.5l-2.764-3.11a1.557 1.557 0 112.327-2.069L6.75 19.5v-9a1.5 1.5 0 013 0v6.75h1.5a4.5 4.5 0 014.5 4.5v.75"
    />
  );

export default SvgTouchPasswordApproved;
