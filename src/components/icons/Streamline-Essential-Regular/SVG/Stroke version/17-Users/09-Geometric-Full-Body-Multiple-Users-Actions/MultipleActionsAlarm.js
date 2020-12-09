import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsAlarm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-alarm_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-alarm_svg__cls-1"
      d="M18 12a3.749 3.749 0 013.75 3.75v3a1.5 1.5 0 001.5 1.5h-10.5a1.5 1.5 0 001.5-1.5v-3A3.75 3.75 0 0118 12zM18 22.5a.375.375 0 11-.375.375A.374.374 0 0118 22.5"
    />,
    <circle
      className="multiple-actions-alarm_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-alarm_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />,
    <circle
      className="multiple-actions-alarm_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-alarm_svg__cls-1"
      d="M11.25 13.5a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.75-7.5h2.25z"
    />
  );

export default SvgMultipleActionsAlarm;
