import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlarmBellTimer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".alarm-bell-timer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="alarm-bell-timer_svg__a" cx={17.5} cy={6.501} r={6} />,
    <path
      className="alarm-bell-timer_svg__a"
      d="M19.5 7.501H17v-3.5M11 21.5a2 2 0 01-4 0"
    />,
    <path
      className="alarm-bell-timer_svg__a"
      d="M9.5 6.552A2.459 2.459 0 009 6.5 2.5 2.5 0 006.5 9a6.5 6.5 0 00-4 6v4.5a2 2 0 01-2 2h17a2 2 0 01-2-2V15a6.444 6.444 0 00-.059-.778"
    />
  );

export default SvgAlarmBellTimer;
