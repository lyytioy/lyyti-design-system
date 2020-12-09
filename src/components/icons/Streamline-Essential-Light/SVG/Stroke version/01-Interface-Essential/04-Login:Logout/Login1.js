import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogin1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="login-1_svg__a"
      d="M13.5 5V1.5a1 1 0 00-1-1h-11a1 1 0 00-1 1v21a1 1 0 001 1h11a1 1 0 001-1V19M4.5 12h19"
    />,
    <path className="login-1_svg__a" d="M9.5 7l-5 5 5 5" />
  );

export default SvgLogin1;
