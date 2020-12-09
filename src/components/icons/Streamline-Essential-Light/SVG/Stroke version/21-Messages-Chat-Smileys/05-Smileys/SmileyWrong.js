import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyWrong = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-wrong_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-wrong_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-wrong_svg__a"
      d="M7.5 7v3M6 8.5h3M16.5 7v3M15 8.5h3M7 18v-1a2.5 2.5 0 015 0 2.5 2.5 0 005 0v-1"
    />
  );

export default SvgSmileyWrong;
