import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBlushing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-blushing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-blushing_svg__a"
      d="M15 17a1.5 1.5 0 01-3 0 1.5 1.5 0 01-3 0M8.5 6.5a3.564 3.564 0 01-3 1.5M15.5 6.5a3.564 3.564 0 003 1.5"
    />,
    <circle className="smiley-blushing_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-blushing_svg__a"
      d="M14.5 14l2-2M17.5 14l2-2M4.5 14l2-2M7.5 14l2-2"
    />
  );

export default SvgSmileyBlushing;
