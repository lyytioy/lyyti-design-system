import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="headphones-cable_svg__a"
      d="M6.5 18.5a5 5 0 010-10zM16.5 18.5a5 5 0 000-10z"
    />,
    <path
      className="headphones-cable_svg__a"
      d="M21.5 13.5v-3a10 10 0 00-20 0v3"
    />,
    <path
      className="headphones-cable_svg__a"
      d="M7.5 19.5h-1v-12h1a1 1 0 011 1v10a1 1 0 01-1 1zM16.5 19.5h-1a1 1 0 01-1-1v-10a1 1 0 011-1h1zM5.5 23.5a1 1 0 000-2h-3v2zM2.5 22.5h-2"
    />,
    <path className="headphones-cable_svg__a" d="M21.5 18.5a2 2 0 010 4h-15" />
  );

export default SvgHeadphonesCable;
