import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyVeryHappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-very-happy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-very-happy_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-very-happy_svg__a"
      d="M8.5 7.5a2.5 2.5 0 00-4 0M15.5 7.5a2.5 2.5 0 014 0M12 14.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 003 0v-3a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle className="smiley-very-happy_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-very-happy_svg__a"
      d="M6.5 9v3M5 10.5h3M17.5 9v3M16 10.5h3"
    />
  );

export default SvgSmileyVeryHappy;
