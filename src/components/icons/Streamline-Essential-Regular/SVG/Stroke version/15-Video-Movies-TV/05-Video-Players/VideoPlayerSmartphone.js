import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-smartphone_svg__a"
      d="M10.134 6.479a1.1 1.1 0 00-1.014.043.975.975 0 00-.495.838v4.78a.975.975 0 00.495.838 1.094 1.094 0 001.015.043L14.62 10.9a1.258 1.258 0 000-2.306z"
    />,
    <rect
      className="video-player-smartphone_svg__a"
      x={3.375}
      y={0.75}
      width={17.25}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path className="video-player-smartphone_svg__a" d="M3.375 18.75h17.25" />
  );

export default SvgVideoPlayerSmartphone;
