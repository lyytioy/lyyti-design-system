import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyVeryHappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-very-happy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-very-happy_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-very-happy_svg__a"
      d="M6.75 10.5h3M8.25 12V9M14.25 10.5h3M15.75 12V9"
    />,
    <rect
      className="smiley-very-happy_svg__a"
      x={10.5}
      y={15.75}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smiley-very-happy_svg__a"
      d="M6.75 6.75a1.8 1.8 0 013 0M14.25 6.75a1.8 1.8 0 013 0"
    />
  );

export default SvgSmileyVeryHappy;
