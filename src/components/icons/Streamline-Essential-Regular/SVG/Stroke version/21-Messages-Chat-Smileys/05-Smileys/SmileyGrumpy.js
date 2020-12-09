import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyGrumpy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-grumpy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-grumpy_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-grumpy_svg__a"
      d="M18.048 18a6.752 6.752 0 00-12.1 0"
    />,
    <circle className="smiley-grumpy_svg__a" cx={8.625} cy={10.5} r={1.5} />,
    <path
      className="smiley-grumpy_svg__a"
      d="M6 6.053a1.8 1.8 0 013 0M15 6.053a1.8 1.8 0 013 0M4.548 9h4.077"
    />,
    <circle className="smiley-grumpy_svg__a" cx={17.298} cy={10.5} r={1.5} />,
    <path className="smiley-grumpy_svg__a" d="M13.548 9h3.75" />
  );

export default SvgSmileyGrumpy;
