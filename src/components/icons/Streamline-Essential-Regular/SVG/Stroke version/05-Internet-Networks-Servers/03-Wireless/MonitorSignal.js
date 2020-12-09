import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-signal_svg__a"
      d="M7.5 8.25H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H16.5M15 23.25H9l.75-4.5h4.5l.75 4.5zM6.75 23.25h10.5M12 7.576"
    />,
    <path
      className="monitor-signal_svg__a"
      d="M12 7.576a.375.375 0 10.375.375.375.375 0 00-.375-.375M18 2.873a9.542 9.542 0 00-12 0M8.5 5.25a5.566 5.566 0 017 0"
    />
  );

export default SvgMonitorSignal;
