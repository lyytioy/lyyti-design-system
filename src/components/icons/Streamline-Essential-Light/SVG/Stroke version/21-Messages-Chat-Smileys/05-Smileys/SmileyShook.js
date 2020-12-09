import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shook_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-shook_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-shook_svg__a"
      d="M5.75 11l3-3M8.75 11l-3-3M15 11l3-3M18 11l-3-3M12 14.5a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 003 0v-2a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgSmileyShook;
