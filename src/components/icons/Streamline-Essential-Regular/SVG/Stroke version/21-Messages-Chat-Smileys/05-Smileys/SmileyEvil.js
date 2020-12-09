import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyEvil = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-evil_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-evil_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-evil_svg__a"
      d="M7.5 17.25L9.75 15 12 17.25 14.25 15l2.25 2.25M5.25 8.25l4.5 2.25M18.75 8.25l-4.5 2.25"
    />
  );

export default SvgSmileyEvil;
