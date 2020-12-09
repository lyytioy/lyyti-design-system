import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-play_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23M8.5 9.629V6.9a.644.644 0 01.976-.553l5.91 2.73a.644.644 0 010 1.106l-5.91 2.73a.645.645 0 01-.976-.553z"
    />,
    <rect
      className="monitor-play_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorPlay;
