import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmile1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smile-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-smile-1_svg__a"
      d="M14.5 9.392a2.359 2.359 0 004 0M9.5 9.392a2.359 2.359 0 01-4 0M6 15.5a6.5 6.5 0 0012 0"
    />,
    <circle className="smiley-smile-1_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgSmileySmile1;
