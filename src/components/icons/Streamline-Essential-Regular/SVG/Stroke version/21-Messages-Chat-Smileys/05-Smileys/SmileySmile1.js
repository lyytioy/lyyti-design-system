import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmile1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smile-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-smile-1_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-smile-1_svg__a"
      d="M18.75 13.5a6.75 6.75 0 01-13.5 0M18.493 8.25a2.25 2.25 0 01-4.243 0M9.75 8.25a2.25 2.25 0 01-4.243 0"
    />
  );

export default SvgSmileySmile1;
