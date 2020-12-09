import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerInterface = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-interface_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-interface_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={3}
      ry={3}
    />,
    <circle
      className="video-player-interface_svg__a"
      cx={12}
      cy={16.5}
      r={4}
    />,
    <path
      className="video-player-interface_svg__a"
      d="M16 16.5h4a.5.5 0 00.5-.5V4a.5.5 0 00-.5-.5H4a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h4M3.5 20.5h3M17.5 20.5h3"
    />,
    <path
      className="video-player-interface_svg__a"
      d="M10.5 18v-3l3 1.5-3 1.5z"
    />
  );

export default SvgVideoPlayerInterface;
