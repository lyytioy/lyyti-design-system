import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSmartphoneHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-smartphone-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-smartphone-horizontal_svg__a"
      d="M8.259 8.729a1.1 1.1 0 00-1.014.043.972.972 0 00-.5.838v4.78a.975.975 0 00.5.838 1.1 1.1 0 001.015.043l4.485-2.118a1.258 1.258 0 000-2.306z"
    />,
    <rect
      className="video-player-smartphone-horizontal_svg__a"
      x={0.75}
      y={3.375}
      width={22.5}
      height={17.25}
      rx={3}
      ry={3}
    />,
    <path
      className="video-player-smartphone-horizontal_svg__a"
      d="M18.75 20.625V3.375"
    />
  );

export default SvgVideoPlayerSmartphoneHorizontal;
