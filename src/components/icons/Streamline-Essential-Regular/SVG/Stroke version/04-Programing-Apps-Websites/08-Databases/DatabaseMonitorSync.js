import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseMonitorSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-monitor-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="database-monitor-sync_svg__a"
      x={0.75}
      y={12.751}
      width={12}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="database-monitor-sync_svg__a"
      d="M6.75 20.251v3M3.75 23.251h6"
    />,
    <ellipse
      className="database-monitor-sync_svg__a"
      cx={18.75}
      cy={2.251}
      rx={4.5}
      ry={1.5}
    />,
    <path
      className="database-monitor-sync_svg__a"
      d="M23.25 2.251v4.5c0 .828-2.015 1.5-4.5 1.5s-4.5-.672-4.5-1.5v-4.5"
    />,
    <path
      className="database-monitor-sync_svg__a"
      d="M23.25 6.751v4.5c0 .828-2.015 1.5-4.5 1.5s-4.5-.672-4.5-1.5v-4.5M6 6.751L3.75 9V6.751a3 3 0 013-3h4.5M1.5 6.751l2.25 2.25"
    />,
    <path
      className="database-monitor-sync_svg__a"
      d="M9 1.501l2.25 2.25L9 6.001"
    />
  );

export default SvgDatabaseMonitorSync;
