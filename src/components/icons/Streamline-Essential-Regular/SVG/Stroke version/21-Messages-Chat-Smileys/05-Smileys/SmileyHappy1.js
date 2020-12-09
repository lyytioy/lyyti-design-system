import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHappy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-happy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-happy-1_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-happy-1_svg__a"
      d="M18.048 15a6.752 6.752 0 01-12.1 0M9.75 6.834a3.689 3.689 0 00-4.018 1.934M14.25 6.834a3.689 3.689 0 014.018 1.934"
    />
  );

export default SvgSmileyHappy1;
