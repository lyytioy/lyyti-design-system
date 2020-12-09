import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBlushing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-blushing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-blushing_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-blushing_svg__a"
      d="M5.25 13.5l.75-.75M8.25 13.5l.75-.75M15 13.5l.75-.75M18 13.5l.75-.75M15.75 16.875a1.875 1.875 0 01-3.75 0 1.875 1.875 0 01-3.75 0M18.268 9.434A3.687 3.687 0 0114.25 7.5M5.732 9.434a3.539 3.539 0 002.334-.291A3.542 3.542 0 009.75 7.5"
    />
  );

export default SvgSmileyBlushing;
