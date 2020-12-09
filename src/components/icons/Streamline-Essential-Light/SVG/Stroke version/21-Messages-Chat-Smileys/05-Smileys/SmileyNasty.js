import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyNasty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-nasty_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-nasty_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-nasty_svg__a"
      d="M6 9l3.5 2M18 9l-3.5 2M18 14.5A6.5 6.5 0 019.5 18"
    />
  );

export default SvgSmileyNasty;
