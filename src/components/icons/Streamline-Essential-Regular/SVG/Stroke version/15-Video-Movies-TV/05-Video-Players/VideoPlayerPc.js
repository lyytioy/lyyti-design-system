import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerPc = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-pc_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-pc_svg__a"
      d="M10.924 5.331a.853.853 0 00-.789.033.759.759 0 00-.385.652v3.718a.76.76 0 00.385.652.853.853 0 00.789.033l3.489-1.647a.979.979 0 000-1.794zM15.75 22.5h-7.5L9 18h6l.75 4.5zM6 22.5h12M.75 14.25h22.5"
    />,
    <rect
      className="video-player-pc_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={16.5}
      rx={2}
      ry={2}
    />
  );

export default SvgVideoPlayerPc;
