import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerDevicePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-device-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-device-play_svg__a"
      d="M20.5 22.5v1M3.5 22.5v1"
    />,
    <rect
      className="video-player-device-play_svg__a"
      x={3.5}
      y={17.491}
      width={11}
      height={3.009}
      rx={0.5}
      ry={0.5}
    />,
    <circle
      className="video-player-device-play_svg__a"
      cx={10.5}
      cy={9.5}
      r={1}
    />,
    <rect
      className="video-player-device-play_svg__a"
      x={0.5}
      y={15.5}
      width={23}
      height={7}
      rx={2}
      ry={2}
    />,
    <circle
      className="video-player-device-play_svg__a"
      cx={10.5}
      cy={9.5}
      r={3}
    />,
    <path
      className="video-player-device-play_svg__a"
      d="M18.557 13.5a8.89 8.89 0 00.884-3M13.5 1.023A8.989 8.989 0 002.443 13.5M20.25 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.75 18.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="video-player-device-play_svg__a"
      x={15.5}
      y={0.5}
      width={8}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="video-player-device-play_svg__a"
      d="M18.5 4.5V3.287a.286.286 0 01.434-.246l2.022 1.213a.286.286 0 010 .492l-2.022 1.213a.286.286 0 01-.434-.246z"
    />
  );

export default SvgVideoPlayerDevicePlay;
