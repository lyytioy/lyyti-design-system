import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyPrank = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-prank_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-prank_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-prank_svg__a"
      d="M15.75 11.121a2.25 2.25 0 010-4.242M8.25 6.879a2.25 2.25 0 010 4.242M5.634 14.25a.75.75 0 00-.707 1 7.5 7.5 0 0014.146 0 .75.75 0 00-.707-1z"
    />
  );

export default SvgSmileyPrank;
