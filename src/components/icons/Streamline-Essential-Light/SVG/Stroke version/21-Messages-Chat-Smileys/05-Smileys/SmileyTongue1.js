import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTongue1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-tongue-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-tongue-1_svg__a"
      d="M9.5 9.608a2.359 2.359 0 00-4 0M14.5 9.608a2.359 2.359 0 014 0"
    />,
    <circle className="smiley-tongue-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-tongue-1_svg__a"
      d="M6.5 14.5a2.906 2.906 0 003 2h5a2.906 2.906 0 003-2"
    />,
    <path
      className="smiley-tongue-1_svg__a"
      d="M11.672 16.5l3.182 3.182a2 2 0 102.828-2.828L16.63 15.8"
    />
  );

export default SvgSmileyTongue1;
