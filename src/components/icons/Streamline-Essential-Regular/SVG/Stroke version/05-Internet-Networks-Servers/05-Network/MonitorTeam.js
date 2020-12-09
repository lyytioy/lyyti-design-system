import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorTeam = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-team_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-team_svg__a"
      d="M21 10.5v8.25a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V10.5M12 20.25v3M6.75 23.25h10.5"
    />,
    <circle className="monitor-team_svg__a" cx={4.647} cy={3} r={2.25} />,
    <path
      className="monitor-team_svg__a"
      d="M8.543 8.25a4.5 4.5 0 00-7.793 0"
    />,
    <circle className="monitor-team_svg__a" cx={19.354} cy={3} r={2.25} />,
    <path
      className="monitor-team_svg__a"
      d="M23.25 8.25a4.5 4.5 0 00-7.793 0"
    />,
    <circle className="monitor-team_svg__a" cx={12} cy={3} r={2.25} />,
    <path
      className="monitor-team_svg__a"
      d="M15.676 7.906a4.5 4.5 0 00-7.353 0M21 17.25H3"
    />
  );

export default SvgMonitorTeam;
