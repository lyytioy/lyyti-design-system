import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyUnhappy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-unhappy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-unhappy-1_svg__a"
      d="M12 18.75A6.75 6.75 0 0118.048 15M15.75 10.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.5 10.125a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-unhappy-1_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgSmileyUnhappy1;
