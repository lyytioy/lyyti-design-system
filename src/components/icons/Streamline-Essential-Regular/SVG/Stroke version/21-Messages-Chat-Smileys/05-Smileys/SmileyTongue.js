import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTongue = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-tongue_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-tongue_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-tongue_svg__a"
      d="M18.493 9.75a2.25 2.25 0 00-4.243 0M9.75 9.75a2.25 2.25 0 00-4.243 0M17.1 14.1a6.85 6.85 0 01-8.85 2.436M16.125 13.125L18 15"
    />,
    <path
      className="smiley-tongue_svg__a"
      d="M10.685 17.214a2.522 2.522 0 00-.039.411A2.625 2.625 0 1015.313 16"
    />
  );

export default SvgSmileyTongue;
