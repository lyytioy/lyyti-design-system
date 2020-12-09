import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-refresh_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h2.25M.75 12.75h9M9 15.75H3.75a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3v4.5M19.5 15.75h3.75v-4.5M23.061 15.75a6 6 0 10-1.121 5.243"
    />
  );

export default SvgMonitorRefresh;
