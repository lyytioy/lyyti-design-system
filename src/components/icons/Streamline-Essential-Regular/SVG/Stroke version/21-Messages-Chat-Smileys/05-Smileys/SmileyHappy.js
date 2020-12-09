import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-happy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-happy_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-happy_svg__a"
      d="M5.634 14.25a.75.75 0 00-.707 1 7.5 7.5 0 0014.146 0 .75.75 0 00-.707-1zM16.5 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.5 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgSmileyHappy;
