import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-monitor_svg__a"
      d="M14.53 6.671a.714.714 0 000-1.342L9.97 3.671A.35.35 0 009.5 4v4a.35.35 0 00.47.329z"
    />,
    <rect
      className="video-player-monitor_svg__a"
      x={1.5}
      y={0.5}
      width={21}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="video-player-monitor_svg__a"
      d="M21.845 22.879a.5.5 0 01-.485.621H2.64a.5.5 0 01-.485-.621l1.25-5a.5.5 0 01.485-.379h16.22a.5.5 0 01.485.379zM1.5 11.5h21M5.5 19.5h1M8.5 19.5h1M11.5 19.5h1M14.5 19.5h1M17.5 19.5h1M4.5 21.5h1M7.5 21.5h9M18.5 21.5h1"
    />
  );

export default SvgVideoPlayerMonitor;
