import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-refresh_svg__a"
      d="M5.5 17.5h4M.5 11.5h11M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-refresh_svg__a"
      d="M20.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h8M19 15.5h4.5V11M23.158 15.5a6 6 0 10-.968 5.742"
    />
  );

export default SvgMonitorRefresh;
