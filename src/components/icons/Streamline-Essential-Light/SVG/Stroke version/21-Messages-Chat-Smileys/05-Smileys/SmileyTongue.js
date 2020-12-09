import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTongue = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-tongue_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-tongue_svg__a"
      d="M9.5 9.608a2.359 2.359 0 00-4 0M14.5 9.608a2.359 2.359 0 014 0"
    />,
    <circle className="smiley-tongue_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-tongue_svg__a"
      d="M8.5 16.5h7a2 2 0 002-2M10.5 16.5v.5a2.5 2.5 0 005 0v-.5M19.5 15a1.415 1.415 0 000-2"
    />
  );

export default SvgSmileyTongue;
