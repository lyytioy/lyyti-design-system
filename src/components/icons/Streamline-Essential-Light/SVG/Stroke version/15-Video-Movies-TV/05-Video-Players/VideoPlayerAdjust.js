import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerAdjust = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-adjust_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-adjust_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="video-player-adjust_svg__a"
      d="M9.307 13.852a.54.54 0 01-.807-.468V6.616a.54.54 0 01.807-.468l5.921 3.384a.539.539 0 010 .936zM3.5 19.5h10M14.5 17.5a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1zM15.5 19.5h5"
    />
  );

export default SvgVideoPlayerAdjust;
