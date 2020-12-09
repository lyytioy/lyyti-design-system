import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKindleHold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".kindle-hold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="kindle-hold_svg__a"
      d="M16.5 14.25L14.824 13a1.569 1.569 0 00-2.247.385 1.569 1.569 0 000 1.74c7.4 6.731 6.17 4.217 6.17 7.38M15.747 9c5.247 3 7.5 3 7.5 13.5"
    />,
    <path
      className="kindle-hold_svg__a"
      d="M12.747 21h-10.5a1.5 1.5 0 01-1.5-1.5V3a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v7.5M.747 17.25h9M4.497 6h7.5M4.497 9h6.75M4.497 12h2.25"
    />
  );

export default SvgKindleHold;
