import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShocked = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shocked_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-shocked_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-shocked_svg__a"
      d="M15.75 11.121a2.25 2.25 0 010-4.242M8.25 6.879a2.25 2.25 0 010 4.242"
    />,
    <circle className="smiley-shocked_svg__a" cx={12} cy={18} r={2.25} />
  );

export default SvgSmileyShocked;
