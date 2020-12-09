import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-sync_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h2.25M.75 12.75h9M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v4.5M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733"
    />
  );

export default SvgMonitorSync;
