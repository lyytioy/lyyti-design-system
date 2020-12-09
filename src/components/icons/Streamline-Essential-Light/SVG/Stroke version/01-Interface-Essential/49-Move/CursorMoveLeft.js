import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-move-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-move-left_svg__a"
      d="M5.208 7.492a9 9 0 110 9.018M10.951 15.561a.5.5 0 01-.633.716L1.8 12.451a.5.5 0 010-.911l8.531-3.878a.5.5 0 01.636.712L8.786 12z"
    />
  );

export default SvgCursorMoveLeft;
