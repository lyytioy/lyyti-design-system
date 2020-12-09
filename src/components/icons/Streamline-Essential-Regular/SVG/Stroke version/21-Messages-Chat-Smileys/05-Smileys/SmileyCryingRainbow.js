import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCryingRainbow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-crying-rainbow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-crying-rainbow_svg__a"
      d="M18.475 9a2.25 2.25 0 00-4.243 0M9.732 9a2.25 2.25 0 00-4.243 0"
    />,
    <rect
      className="smiley-crying-rainbow_svg__a"
      x={10.5}
      y={14.25}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smiley-crying-rainbow_svg__a"
      d="M4.5 12.75v7.5a2.25 2.25 0 00-2.25 2.25.75.75 0 00.75.75h6a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25v-7.5M16.5 12.75v7.5a2.25 2.25 0 00-2.25 2.25.75.75 0 00.75.75h6a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25v-7.5M22.6 15.75a11.251 11.251 0 10-21.193 0"
    />
  );

export default SvgSmileyCryingRainbow;
