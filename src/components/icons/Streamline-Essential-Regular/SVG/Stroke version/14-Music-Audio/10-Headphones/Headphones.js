import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphones = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="headphones_svg__a"
      d="M18.75 21.375a4.5 4.5 0 004.5-4.5 4.5 4.5 0 00-4.5-4.5 1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5zM5.25 21.375a4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5 1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="headphones_svg__a"
      d="M3.75 12.631v-1.756A8.274 8.274 0 0112 2.625a8.274 8.274 0 018.25 8.25v1.756"
    />
  );

export default SvgHeadphones;
