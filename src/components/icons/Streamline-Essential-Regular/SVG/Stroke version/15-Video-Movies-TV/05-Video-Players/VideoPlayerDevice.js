import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerDevice = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-device_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-device_svg__a"
      x={0.75}
      y={15.75}
      width={22.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="video-player-device_svg__a"
      d="M4.5 20.25h8.25M16.5 19.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M20.25 19.125a.375.375 0 11-.375.375.375.375 0 01.375-.375M3.509 12.741a9 9 0 1116.979.01"
    />,
    <circle className="video-player-device_svg__a" cx={12} cy={9.75} r={3} />,
    <path
      className="video-player-device_svg__a"
      d="M14.374 1.066l-1.649 5.772M15 9.75l5.969-.746"
    />
  );

export default SvgVideoPlayerDevice;
