import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorUsers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-users_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-users_svg__a"
      d="M20 13v6.912a1.546 1.546 0 01-1.5 1.588h-13A1.546 1.546 0 014 19.912V13M8.5 23.5h7M12 21.5v2M4 18.5h16M14 13.5l4-4M15 9.5h3v3M10 13.5l-4-4M9 9.5H6v3"
    />,
    <circle className="monitor-users_svg__a" cx={19.5} cy={2.5} r={2} />,
    <path
      className="monitor-users_svg__a"
      d="M19.5 4.5C17 4.5 16 6 16 7.5h7c0-1.5-1-3-3.5-3z"
    />,
    <circle className="monitor-users_svg__a" cx={4.5} cy={2.5} r={2} />,
    <path
      className="monitor-users_svg__a"
      d="M4.5 4.5C2 4.5 1 6 1 7.5h7c0-1.5-1-3-3.5-3z"
    />
  );

export default SvgMonitorUsers;
