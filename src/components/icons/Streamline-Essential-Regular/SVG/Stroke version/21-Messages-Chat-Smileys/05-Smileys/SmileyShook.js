import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shook_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-shook_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-shook_svg__a"
      d="M6.753 10.499L9.75 7.503M9.75 10.5L6.753 7.502M14.25 10.499l2.997-2.996M17.247 10.5L14.25 7.502"
    />,
    <rect
      className="smiley-shook_svg__a"
      x={10.5}
      y={15}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="smiley-shook_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-shook_svg__a"
      d="M6.753 10.499L9.75 7.503M9.75 10.5L6.753 7.502M14.25 10.499l2.997-2.996M17.247 10.5L14.25 7.502"
    />,
    <rect
      className="smiley-shook_svg__a"
      x={10.5}
      y={15}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSmileyShook;
