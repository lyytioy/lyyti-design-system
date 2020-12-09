import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVinylRecordPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vinyl-record-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="vinyl-record-player_svg__a"
      cx={9.75}
      cy={13.5}
      r={1.5}
    />,
    <path
      className="vinyl-record-player_svg__a"
      d="M17.25 4.5h-15A1.5 1.5 0 00.75 6v15a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-1.5M13.233 18.386a6 6 0 112.22-6.756"
    />,
    <rect
      className="vinyl-record-player_svg__a"
      x={17.25}
      y={1.5}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path className="vinyl-record-player_svg__a" d="M18.75 7.5v5.25l-3.75 3" />
  );

export default SvgVinylRecordPlayer;
