import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyPrank = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-prank_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-prank_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-prank_svg__a"
      d="M15.873 15.5a1 1 0 01.97 1.249 5 5 0 01-9.686 0 1 1 0 01.97-1.249zM6.5 9.5h3L7 7M17.5 9.5h-3L17 7"
    />
  );

export default SvgSmileyPrank;
