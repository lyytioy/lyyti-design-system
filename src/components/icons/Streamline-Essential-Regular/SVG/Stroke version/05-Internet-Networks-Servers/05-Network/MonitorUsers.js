import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorUsers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-users_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-users_svg__a"
      d="M15 23.25H9l.75-4.5h4.5l.75 4.5zM6.75 23.25h10.5M6.75 9h-6v-.75a3 3 0 013-3 3 3 0 013 3z"
    />,
    <circle className="monitor-users_svg__a" cx={3.75} cy={3} r={2.25} />,
    <path
      className="monitor-users_svg__a"
      d="M23.25 9h-6v-.75a3 3 0 013-3 3 3 0 013 3z"
    />,
    <circle className="monitor-users_svg__a" cx={20.25} cy={3} r={2.25} />,
    <path
      className="monitor-users_svg__a"
      d="M20.25 12v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V12M3.75 15.75h16.5M9.75 6.75h4.5"
    />
  );

export default SvgMonitorUsers;
