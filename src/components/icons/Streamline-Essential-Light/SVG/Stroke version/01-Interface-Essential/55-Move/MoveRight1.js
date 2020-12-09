import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveRight1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-right-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-right-1_svg__a"
      d="M.5 11.499h17M13.5 7.499l4 4-4 4M23.5 23.499v-23"
    />
  );

export default SvgMoveRight1;
