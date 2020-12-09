import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerAdjust = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-adjust_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-adjust_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.304}
      ry={1.304}
    />,
    <path
      className="video-player-adjust_svg__a"
      d="M9.114 13.812a.626.626 0 01-.576 0 .521.521 0 01-.288-.456V6.733a.521.521 0 01.288-.456.626.626 0 01.576 0l6.345 3.311a.505.505 0 010 .915zM3.75 18.75h16.5M15.75 17.25v3"
    />
  );

export default SvgVideoPlayerAdjust;
