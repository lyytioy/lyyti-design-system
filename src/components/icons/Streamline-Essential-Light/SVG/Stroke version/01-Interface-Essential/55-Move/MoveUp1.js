import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveUp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-up-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-up-1_svg__a"
      d="M12.5 23.499v-17M8.5 10.499l4-4 4 4M23.5.499H.5"
    />
  );

export default SvgMoveUp1;
