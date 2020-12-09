import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-bug_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h3M.75 12.75h8.281M9.75 15.75h-6a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v6.75M20.25 18.75a3 3 0 01-6 0v-1.5a3 3 0 016 0zM14.25 17.25h6M14.515 16.015L12 13.5M15.129 20.871L12.75 23.25M14.25 18.75h-3M19.985 16.015L22.5 13.5M19.371 20.871l2.379 2.379M20.25 18.75h3"
    />
  );

export default SvgMonitorBug;
