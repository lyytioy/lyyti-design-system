import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPortablePlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".portable-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="portable-player_svg__a"
      x={4.5}
      y={0.5}
      width={15}
      height={23}
      rx={3}
      ry={3}
    />,
    <rect
      className="portable-player_svg__a"
      x={6.5}
      y={3.5}
      width={11}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="portable-player_svg__a" cx={12} cy={16} r={5} />,
    <path
      className="portable-player_svg__a"
      d="M12 15.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPortablePlayer;
