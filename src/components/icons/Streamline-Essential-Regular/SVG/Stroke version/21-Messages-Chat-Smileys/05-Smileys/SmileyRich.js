import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyRich = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-rich_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-rich_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-rich_svg__a"
      d="M18.048 15.75a6.752 6.752 0 01-12.1 0M6.392 10.844a2.221 2.221 0 001.858.875c1.139 0 2.062-.693 2.062-1.547S9.389 8.626 8.25 8.626s-2.063-.693-2.063-1.548.924-1.547 2.063-1.547a2.223 2.223 0 011.858.875M8.25 11.719v1.031M8.25 4.5v1.031M13.892 10.844a2.221 2.221 0 001.858.875c1.139 0 2.062-.693 2.062-1.547s-.923-1.546-2.062-1.546-2.063-.693-2.063-1.548.924-1.547 2.063-1.547a2.223 2.223 0 011.858.875M15.75 11.719v1.031M15.75 4.5v1.031"
    />
  );

export default SvgSmileyRich;
