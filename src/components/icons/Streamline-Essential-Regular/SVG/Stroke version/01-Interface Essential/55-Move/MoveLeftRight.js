import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveLeftRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-left-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-left-right_svg__a"
      d="M.75 14.248h20.689a.751.751 0 01.531 1.281L18 19.5M6 4.5L2.03 8.468a.75.75 0 00.531 1.28H23.25"
    />
  );

export default SvgMoveLeftRight;
