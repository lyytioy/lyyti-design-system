import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorWww = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-www_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-www_svg__a"
      d="M.75 6.75v2.017a9 9 0 00.644 3.342l.856 2.141L3.75 9l1.5 5.25.856-2.141a9 9 0 00.644-3.342V6.75M9 6.75v2.017a9 9 0 00.644 3.342l.856 2.141L12 9l1.5 5.25.856-2.141A9 9 0 0015 8.767V6.75M17.25 6.75v2.017a9 9 0 00.644 3.342l.856 2.141L20.25 9l1.5 5.25.856-2.141a9 9 0 00.644-3.342V6.75M15 23.25H9l.75-4.5h4.5l.75 4.5zM6.75 23.25h10.5M.75.75h22.5M.75 18.75h22.5"
    />
  );

export default SvgMonitorWww;
