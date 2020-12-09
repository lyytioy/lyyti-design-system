import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWallSocket = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wall-socket_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="wall-socket_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path className="wall-socket_svg__a" d="M8.25 9.75v4.5M15.75 9.75v4.5" />,
    <circle className="wall-socket_svg__a" cx={12} cy={12} r={8.25} />
  );

export default SvgWallSocket;
