import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player_svg__a"
      d="M9.947 15.776a1 1 0 01-1.447-.894V9.118a1 1 0 011.447-.894l5.764 2.882a1 1 0 010 1.788z"
    />,
    <rect
      className="video-player_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={19}
      rx={4}
      ry={4}
    />
  );

export default SvgVideoPlayer;
