import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyWink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-wink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-wink_svg__a"
      d="M7.25 9.251A.25.25 0 117 9.5a.25.25 0 01.25-.25M5.369 15.5a7.5 7.5 0 0013.262 0"
    />,
    <circle className="smiley-wink_svg__a" cx={12} cy={12} r={11.5} />,
    <path className="smiley-wink_svg__a" d="M14.5 9.608a2.359 2.359 0 014 0" />
  );

export default SvgSmileyWink;
