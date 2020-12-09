import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveRight1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-right-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-right-1_svg__a"
      d="M18.75 11.998h-18M15 8.248l3.75 3.75-3.75 3.75M23.25.748v22.5"
    />
  );

export default SvgMoveRight1;
