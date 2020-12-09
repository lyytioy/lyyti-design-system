import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveBack = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-back_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="move-back_svg__a" d="M.5 10.499h23v7" />,
    <path className="move-back_svg__a" d="M5.5 15.499l-5-5 5-5" />
  );

export default SvgMoveBack;
