import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBright = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-bright_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-bright_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-bright_svg__a"
      d="M7 7a2.5 2.5 0 002.5 2.5A2.5 2.5 0 007 12a2.5 2.5 0 00-2.5-2.5A2.5 2.5 0 007 7M17 7a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 0117 12a2.5 2.5 0 012.5-2.5A2.5 2.5 0 0117 7M10 19.5h4a3 3 0 003-3M19 17a1.415 1.415 0 000-2"
    />
  );

export default SvgSmileyBright;
