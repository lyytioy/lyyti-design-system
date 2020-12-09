import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="skull_svg__a"
      d="M18.75 22.5v-4.225a9.75 9.75 0 10-13.5 0V22.5"
    />,
    <circle className="skull_svg__a" cx={7.5} cy={11.25} r={2.25} />,
    <circle className="skull_svg__a" cx={16.5} cy={11.25} r={2.25} />,
    <path className="skull_svg__a" d="M9.75 19.5v3M14.25 19.5v3" />
  );

export default SvgSkull;
