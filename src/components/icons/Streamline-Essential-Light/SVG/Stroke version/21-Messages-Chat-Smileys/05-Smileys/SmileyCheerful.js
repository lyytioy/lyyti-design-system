import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyCheerful = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-cheerful_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-cheerful_svg__a"
      d="M9.5 9.608a2.359 2.359 0 00-4 0M14.5 9.608a2.359 2.359 0 014 0"
    />,
    <circle className="smiley-cheerful_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-cheerful_svg__a"
      d="M15 17a1.5 1.5 0 01-3 0 1.5 1.5 0 01-3 0"
    />
  );

export default SvgSmileyCheerful;
