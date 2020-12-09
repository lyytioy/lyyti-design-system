import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cd-player_svg__a"
      d="M5.808 9.471a4.961 4.961 0 013.374-3.46"
    />,
    <rect
      className="cd-player_svg__a"
      x={0.75}
      y={12.75}
      width={22.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cd-player_svg__a"
      d="M3.75 21.75v-1.5M20.25 21.75v-1.5M18.712 9.75a8.246 8.246 0 00-16.424 0M11.948 9.75a1.615 1.615 0 00-2.9 0M19.125 15.75a.375.375 0 11-.375.375.375.375 0 01.375-.375M5.25 17.25h8.25"
    />
  );

export default SvgCdPlayer;
