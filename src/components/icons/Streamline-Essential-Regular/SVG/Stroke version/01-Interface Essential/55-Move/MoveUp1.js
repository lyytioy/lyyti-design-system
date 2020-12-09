import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveUp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-up-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-up-1_svg__a"
      d="M12 5.248v18M8.25 8.998L12 5.248l3.75 3.75M.75.748h22.5"
    />
  );

export default SvgMoveUp1;
