import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyUnhappy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-unhappy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-unhappy-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-unhappy-1_svg__a"
      d="M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M10.5 19.611a6.8 6.8 0 017-3"
    />
  );

export default SvgSmileyUnhappy1;
