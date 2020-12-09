import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerDevicePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-device-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-device-play_svg__a"
      d="M16.988 8.175a.855.855 0 01-1.238-.765V1.621a.855.855 0 011.238-.765l5.789 2.894a.856.856 0 010 1.531z"
    />,
    <rect
      className="video-player-device-play_svg__a"
      x={0.75}
      y={15.75}
      width={22.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="video-player-device-play_svg__a"
      d="M4.5 20.25h8.25M16.5 19.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M20.25 19.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M21 9.75a9.01 9.01 0 01-.512 3M3.509 12.741A9.008 9.008 0 0113.02.807M14.872 10.62a3 3 0 11-2.035-3.752"
    />
  );

export default SvgVideoPlayerDevicePlay;
