import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-monitor_svg__a"
      d="M15.75.75h4.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h3M20.767 22.318a.749.749 0 01-.728.932H3.961a.749.749 0 01-.728-.932l1.125-4.5a.749.749 0 01.728-.568h13.828a.749.749 0 01.728.568zM2.25 11.25h19.5M6.75 20.25h1.5M15.75 20.25h1.5M11.25 20.25h1.5"
    />,
    <path
      className="video-player-monitor_svg__a"
      d="M10.924 2.331a.853.853 0 00-.789.033.759.759 0 00-.385.652v3.718a.76.76 0 00.385.652.853.853 0 00.789.033l3.489-1.647a.979.979 0 000-1.794z"
    />
  );

export default SvgVideoPlayerMonitor;
