import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-camera_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23M17.5 7l-2 .583V7a1 1 0 00-1-1h-6a1 1 0 00-1 1v5a1 1 0 001 1h6a1 1 0 001-1v-.667l2 .667z"
    />,
    <rect
      className="monitor-camera_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorCamera;
