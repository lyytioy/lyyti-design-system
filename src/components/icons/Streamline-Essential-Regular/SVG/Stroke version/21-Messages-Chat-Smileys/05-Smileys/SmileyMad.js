import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyMad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-mad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-mad_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-mad_svg__a"
      d="M18.048 18a6.752 6.752 0 00-12.1 0M5.25 8.25l4.5 2.25M18.75 8.25l-4.5 2.25"
    />
  );

export default SvgSmileyMad;
