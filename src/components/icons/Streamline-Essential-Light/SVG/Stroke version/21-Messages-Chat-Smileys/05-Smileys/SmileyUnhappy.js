import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyUnhappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-unhappy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-unhappy_svg__a"
      d="M8.5 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M10.38 18.5A6.521 6.521 0 0117 16.355"
    />,
    <circle className="smiley-unhappy_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgSmileyUnhappy;
