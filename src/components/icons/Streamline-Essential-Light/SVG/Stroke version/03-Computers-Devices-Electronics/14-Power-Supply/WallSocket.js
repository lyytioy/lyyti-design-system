import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWallSocket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wall-socket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="wall-socket_svg__a" d="M9.5 9.5v5M14.5 9.5v5" />,
    <rect
      className="wall-socket_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="wall-socket_svg__a" cx={12} cy={12} r={7.5} />
  );

export default SvgWallSocket;
