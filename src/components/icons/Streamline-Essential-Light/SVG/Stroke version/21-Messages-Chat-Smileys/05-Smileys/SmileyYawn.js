import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyYawn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-yawn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-yawn_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-yawn_svg__a"
      d="M5.5 8a3.564 3.564 0 013-1.5M18.5 8a3.564 3.564 0 00-3-1.5M12 12.5A2.5 2.5 0 009.5 15v3a2.5 2.5 0 005 0v-3a2.5 2.5 0 00-2.5-2.5z"
    />
  );

export default SvgSmileyYawn;
