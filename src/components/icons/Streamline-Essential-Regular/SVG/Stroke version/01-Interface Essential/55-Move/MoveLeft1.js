import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveLeft1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-left-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-left-1_svg__a"
      d="M5.25 11.998h18M9 8.248l-3.75 3.75L9 15.748M.75.748v22.5"
    />
  );

export default SvgMoveLeft1;
