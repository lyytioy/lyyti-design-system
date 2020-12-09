import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveLeftRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-left-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-left-right_svg__a"
      d="M7 3.499l-6.5 6h18M17 20.499l6.5-6h-18"
    />
  );

export default SvgMoveLeftRight;
