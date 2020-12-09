import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsAlarm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-alarm_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-alarm_svg__cls-1"
      d="M17.25 12A3.75 3.75 0 0121 15.75v3a1.5 1.5 0 001.5 1.5H12a1.5 1.5 0 001.5-1.5v-3A3.75 3.75 0 0117.25 12zM17.25 22.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle
      className="single-woman-actions-alarm_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-alarm_svg__cls-1"
      d="M10.567 10.91a5.286 5.286 0 00-1.681-1.8L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5h4.5M3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsAlarm;
