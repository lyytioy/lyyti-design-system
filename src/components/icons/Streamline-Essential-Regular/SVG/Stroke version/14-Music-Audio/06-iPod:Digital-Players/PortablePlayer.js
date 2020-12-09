import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPortablePlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".portable-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="portable-player_svg__a"
      x={4.5}
      y={0.75}
      width={15}
      height={22.5}
      rx={1.875}
      ry={1.875}
    />,
    <circle className="portable-player_svg__a" cx={12} cy={15.75} r={4.5} />,
    <circle className="portable-player_svg__a" cx={12} cy={15.75} r={1.5} />,
    <path className="portable-player_svg__a" d="M7.5 3.75h9v4.5h-9z" />
  );

export default SvgPortablePlayer;
