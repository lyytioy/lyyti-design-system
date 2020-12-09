import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTeam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-team_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-team_svg__a"
      d="M9 23.5h6M12 21.5v2M4 19.5h16M20 14v6a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20v-6M4 11V8.5h2.5"
    />,
    <circle className="monitor-team_svg__a" cx={3.5} cy={2} r={1.5} />,
    <path
      className="monitor-team_svg__a"
      d="M6 6.5H1a2.784 2.784 0 012.5-3 2.784 2.784 0 012.5 3z"
    />,
    <circle className="monitor-team_svg__a" cx={20.5} cy={2} r={1.5} />,
    <path
      className="monitor-team_svg__a"
      d="M23 6.5h-5a2.784 2.784 0 012.5-3 2.784 2.784 0 012.5 3z"
    />,
    <circle className="monitor-team_svg__a" cx={12} cy={2} r={1.5} />,
    <path
      className="monitor-team_svg__a"
      d="M14.5 6.5h-5a2.784 2.784 0 012.5-3 2.784 2.784 0 012.5 3zM4 8.5l4.969 4.989M20 11V8.5h-2.5M20 8.5l-4.969 4.989M12 13.484V8.5M10.016 9.984L12 8.5l2.016 1.5"
    />
  );

export default SvgMonitorTeam;
