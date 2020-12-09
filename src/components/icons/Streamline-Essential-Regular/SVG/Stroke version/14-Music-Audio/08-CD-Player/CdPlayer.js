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
    <rect
      className="cd-player_svg__a"
      x={0.75}
      y={14.25}
      width={22.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cd-player_svg__a"
      d="M3.75 23.25v-1.5M20.25 23.25v-1.5M19.125 17.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M5.25 18.75h8.25"
    />,
    <circle className="cd-player_svg__a" cx={15.75} cy={8.579} r={1.5} />,
    <circle className="cd-player_svg__a" cx={21.75} cy={7.079} r={1.5} />,
    <path
      className="cd-player_svg__a"
      d="M23.25 7.079V2.25A1.5 1.5 0 0021.386.8l-3 .75A1.5 1.5 0 0017.25 3v5.579M2.6 11.275A7.5 7.5 0 0114.329 3.06M11.105 10.8a2.25 2.25 0 11.09-3.521"
    />
  );

export default SvgCdPlayer;
