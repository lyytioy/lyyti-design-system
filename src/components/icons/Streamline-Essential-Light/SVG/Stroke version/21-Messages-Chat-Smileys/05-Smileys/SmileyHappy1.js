import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHappy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-happy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-happy-1_svg__a"
      d="M5.369 13.5a7.5 7.5 0 0013.262 0"
    />,
    <circle className="smiley-happy-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-happy-1_svg__a"
      d="M5.5 8a3.564 3.564 0 013-1.5M18.5 8a3.564 3.564 0 00-3-1.5"
    />
  );

export default SvgSmileyHappy1;
