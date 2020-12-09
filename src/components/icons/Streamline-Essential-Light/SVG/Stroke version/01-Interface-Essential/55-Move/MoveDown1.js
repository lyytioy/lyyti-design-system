import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveDown1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-down-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-down-1_svg__a"
      d="M12.5.499v17M16.5 13.499l-4 4-4-4M.5 23.499h23"
    />
  );

export default SvgMoveDown1;
