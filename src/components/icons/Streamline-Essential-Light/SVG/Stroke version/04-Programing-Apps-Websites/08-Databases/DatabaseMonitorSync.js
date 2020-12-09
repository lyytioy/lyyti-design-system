import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseMonitorSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-monitor-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="database-monitor-sync_svg__a"
      d="M6 10V7.751A3.749 3.749 0 019.75 4h1.75"
    />,
    <path
      className="database-monitor-sync_svg__a"
      d="M8 8.001l-2 2-2-2M10 2.501l1.5 1.5-1.5 1.5M3 23.501h7M6.5 21.501v2M.5 18.501h12M11 13.5a1.5 1.5 0 011.5 1.5v4.912A1.545 1.545 0 0111 21.5H2a1.546 1.546 0 01-1.5-1.587V15A1.5 1.5 0 012 13.5z"
    />,
    <ellipse
      className="database-monitor-sync_svg__a"
      cx={19.5}
      cy={2.501}
      rx={4}
      ry={2}
    />,
    <path
      className="database-monitor-sync_svg__a"
      d="M15.5 7.5c0 1.1 1.791 2 4 2s4-.9 4-2M15.5 5c0 1.1 1.791 2 4 2s4-.9 4-2"
    />,
    <path
      className="database-monitor-sync_svg__a"
      d="M23.5 2.5V10c0 1.1-1.791 2-4 2s-4-.9-4-2V2.5"
    />
  );

export default SvgDatabaseMonitorSync;
