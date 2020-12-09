import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyWink = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-wink_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-wink_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-wink_svg__a"
      d="M18.75 13.5a6.75 6.75 0 01-13.5 0M8.25 8.625A.375.375 0 117.875 9a.375.375 0 01.375-.375M17.871 9.75a2.25 2.25 0 00-4.242 0"
    />
  );

export default SvgSmileyWink;
