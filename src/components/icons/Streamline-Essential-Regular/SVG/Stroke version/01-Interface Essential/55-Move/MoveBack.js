import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveBack = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-back_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="move-back_svg__a" d="M6 4.498L.75 9.748 6 14.998" />,
    <path
      className="move-back_svg__a"
      d="M.75 9.748h21a1.5 1.5 0 011.5 1.5v9"
    />
  );

export default SvgMoveBack;
