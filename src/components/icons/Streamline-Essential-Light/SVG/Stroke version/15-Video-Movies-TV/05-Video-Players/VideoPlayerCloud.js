import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerCloud = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-cloud_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-cloud_svg__a"
      d="M10.894 14.447A.618.618 0 0010 15v3a.618.618 0 00.895.553l2.658-1.329a.81.81 0 000-1.448zM20.5 13.406A4.312 4.312 0 0023 9.357a4.711 4.711 0 00-4.954-4.635A6.707 6.707 0 0012 1a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 10.518 3.186 3.186 0 003.5 13.8"
    />,
    <rect
      className="video-player-cloud_svg__a"
      x={6}
      y={10}
      width={12}
      height={13}
      rx={1}
      ry={1}
    />,
    <path
      className="video-player-cloud_svg__a"
      d="M8 12h1M15 12h1M11.5 12h1M8 21h1M15 21h1M11.5 21h1"
    />
  );

export default SvgVideoPlayerCloud;
