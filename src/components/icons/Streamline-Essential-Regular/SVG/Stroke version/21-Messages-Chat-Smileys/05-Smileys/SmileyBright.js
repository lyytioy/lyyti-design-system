import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBright = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-bright_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-bright_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-bright_svg__a"
      d="M17.1 15.6a6.754 6.754 0 01-5.085 3.118M16.125 14.625L18 16.5M7.5 6a8.718 8.718 0 01-2.25 2.625A8.718 8.718 0 017.5 11.25a8.718 8.718 0 012.25-2.625A8.718 8.718 0 017.5 6M16.5 6a8.718 8.718 0 01-2.25 2.625 8.718 8.718 0 012.25 2.625 8.718 8.718 0 012.25-2.625A8.718 8.718 0 0116.5 6"
    />
  );

export default SvgSmileyBright;
