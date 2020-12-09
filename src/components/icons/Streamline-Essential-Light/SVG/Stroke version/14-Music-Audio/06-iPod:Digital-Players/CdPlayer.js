import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cd-player_svg__a"
      x={0.5}
      y={13.5}
      width={23}
      height={6}
      rx={2}
      ry={2}
    />,
    <path className="cd-player_svg__a" d="M2.5 19.5v1M21.5 19.5v1" />,
    <circle className="cd-player_svg__a" cx={19.5} cy={16.5} r={1} />,
    <path
      className="cd-player_svg__a"
      d="M3 16.5h12M3 11.5a8 8 0 0116 0M7 8.5a5 5 0 014-2M9.5 11.5a1.5 1.5 0 013 0"
    />
  );

export default SvgCdPlayer;
