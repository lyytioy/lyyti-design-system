import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellTimer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-timer-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="alarm-bell-timer-1_svg__a"
      d="M9.6 7.724A5.985 5.985 0 002 13.5V19a1.5 1.5 0 01-1.5 1.5h15A1.5 1.5 0 0114 19v-5.314M9.415 22.5a1.5 1.5 0 01-2.829 0M8 5.501v2"
    />,
    <circle className="alarm-bell-timer-1_svg__a" cx={17.5} cy={6.502} r={6} />,
    <path className="alarm-bell-timer-1_svg__a" d="M19.5 6.502h-2v-3" />
  );

export default SvgAlarmBellTimer1;
