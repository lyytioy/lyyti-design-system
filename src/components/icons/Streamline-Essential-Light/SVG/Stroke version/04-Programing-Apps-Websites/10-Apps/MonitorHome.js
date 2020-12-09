import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-home_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23"
    />,
    <rect
      className="monitor-home_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-home_svg__a"
      d="M9 8.136V12a1 1 0 001 1h4a1 1 0 001-1V8.136"
    />,
    <path
      className="monitor-home_svg__a"
      d="M8 9.011l3.012-2.636a1.5 1.5 0 011.976 0L16 9.011M13 13h-2v-2a1 1 0 112 0z"
    />
  );

export default SvgMonitorHome;
