import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyGrumpy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-grumpy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-grumpy_svg__a" d="M7.5 19a4.5 4.5 0 019 0" />,
    <circle className="smiley-grumpy_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-grumpy_svg__a"
      d="M15 5.5a2.5 2.5 0 014 0M5.5 9.5h3M8.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M15.5 9.5h3M18.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M5 5.5a2.5 2.5 0 014 0"
    />
  );

export default SvgSmileyGrumpy;
