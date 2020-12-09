import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKiss = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-kiss_svg__a"
      d="M14.5 9.392a2.359 2.359 0 004 0M9.5 9.392a2.359 2.359 0 01-4 0"
    />,
    <circle className="smiley-kiss_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-kiss_svg__a"
      d="M13.5 18.5h2a1 1 0 002 0v-3a1 1 0 00-2 0h-2"
    />
  );

export default SvgSmileyKiss;
