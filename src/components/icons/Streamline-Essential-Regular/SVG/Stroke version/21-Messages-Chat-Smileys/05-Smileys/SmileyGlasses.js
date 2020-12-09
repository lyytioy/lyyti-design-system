import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-glasses_svg__a"
      d="M3 5.25a11.252 11.252 0 0118 0M23.129 10.342A11.251 11.251 0 11.75 12a11.333 11.333 0 01.121-1.658"
    />,
    <path
      className="smiley-glasses_svg__a"
      d="M5.634 14.25a.75.75 0 00-.707 1 7.5 7.5 0 0014.146 0 .75.75 0 00-.707-1z"
    />,
    <rect
      className="smiley-glasses_svg__a"
      x={0.75}
      y={5.25}
      width={9}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="smiley-glasses_svg__a"
      x={14.25}
      y={5.25}
      width={9}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path className="smiley-glasses_svg__a" d="M9.75 8.25h4.5" />
  );

export default SvgSmileyGlasses;
