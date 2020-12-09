import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmirk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smirk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-smirk_svg__a" d="M18 14.5A6.5 6.5 0 019.5 18" />,
    <circle className="smiley-smirk_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-smirk_svg__a"
      d="M8.5 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M15.5 7.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgSmileySmirk;
