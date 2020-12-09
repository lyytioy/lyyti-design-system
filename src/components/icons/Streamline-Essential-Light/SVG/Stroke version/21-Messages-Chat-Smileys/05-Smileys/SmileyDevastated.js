import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDevastated = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-devastated_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-devastated_svg__a"
      d="M6.5 9.5h3L7 7M17.5 9.5h-3L17 7M7.5 19a4.5 4.5 0 019 0"
    />,
    <circle className="smiley-devastated_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgSmileyDevastated;
