import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerPc = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-pc_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="video-player-pc_svg__a" d="M2 11.5h20" />,
    <rect
      className="video-player-pc_svg__a"
      x={2}
      y={0.5}
      width={20}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="video-player-pc_svg__a"
      d="M19.8 21.9a1 1 0 01-.8 1.6H5a1 1 0 01-.8-1.6l1.5-2a1 1 0 01.8-.4h11a1 1 0 01.8.4zM10 21.5h1M7 21.5h1M14 21.5h-1M17 21.5h-1M15 17.5a3.75 3.75 0 01-1.5-3h-3a3.75 3.75 0 01-1.5 3zM7 17.5h10M14.03 6.671a.714.714 0 000-1.342L9.47 3.671A.35.35 0 009 4v4a.35.35 0 00.47.329z"
    />
  );

export default SvgVideoPlayerPc;
