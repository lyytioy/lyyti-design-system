import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-triangle_svg__a"
      d="M5.77 1.5l14.082 6.1c.5.219.5.576 0 .8L5.77 14.5M3.77.5v23"
    />
  );

export default SvgFlagTriangle;
