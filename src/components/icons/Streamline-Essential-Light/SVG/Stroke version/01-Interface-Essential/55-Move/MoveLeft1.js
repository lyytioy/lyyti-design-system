import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveLeft1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-left-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-left-1_svg__a"
      d="M23.5 11.499h-17M10.5 15.499l-4-4 4-4M.5.499v23"
    />
  );

export default SvgMoveLeft1;
