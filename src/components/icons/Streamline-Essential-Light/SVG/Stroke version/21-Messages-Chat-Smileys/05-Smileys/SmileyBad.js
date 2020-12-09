import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-bad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-bad_svg__a" d="M6.5 9.5h3L7 7M17.5 9.5h-3L17 7" />,
    <circle className="smiley-bad_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-bad_svg__a"
      d="M15.873 18.5a1 1 0 00.97-1.249 5 5 0 00-9.686 0 1 1 0 00.97 1.249z"
    />
  );

export default SvgSmileyBad;
