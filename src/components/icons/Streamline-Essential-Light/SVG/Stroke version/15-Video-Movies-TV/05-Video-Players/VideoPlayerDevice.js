import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerDevice = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-device_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="video-player-device_svg__a" d="M20.5 22.5v1M3.5 22.5v1" />,
    <rect
      className="video-player-device_svg__a"
      x={3.5}
      y={17.491}
      width={11}
      height={3.009}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="video-player-device_svg__a" cx={12} cy={9.5} r={1} />,
    <rect
      className="video-player-device_svg__a"
      x={0.5}
      y={15.5}
      width={23}
      height={7}
      rx={2}
      ry={2}
    />,
    <circle className="video-player-device_svg__a" cx={12} cy={9.5} r={3} />,
    <path
      className="video-player-device_svg__a"
      d="M12 3.5a6 6 0 016 6M20.057 13.5A9 9 0 103 9.5a8.913 8.913 0 00.943 4M17.5 15.5V17M20.5 15.5V17"
    />
  );

export default SvgVideoPlayerDevice;
