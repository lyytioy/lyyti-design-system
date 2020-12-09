import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShocked = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shocked_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-shocked_svg__a"
      d="M17.5 9.5h-1.793a.5.5 0 01-.353-.854L17 7"
    />,
    <circle className="smiley-shocked_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-shocked_svg__a"
      d="M6.5 9.5h1.793a.5.5 0 00.353-.854L7 7M12 14.5a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 003 0v-2a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgSmileyShocked;
