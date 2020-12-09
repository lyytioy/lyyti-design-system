import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsAlarm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-alarm_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-alarm_svg__cls-1"
      d="M22.5 20.5a.5.5 0 00.4-.792 4.03 4.03 0 01-.9-2.541v-1.5a4.116 4.116 0 00-3.607-4.153A4 4 0 0014 15.5v1.667a4.03 4.03 0 01-.9 2.541.5.5 0 00.4.792zM16.714 22.5a1.327 1.327 0 002.572 0M2.984 2.223A5.809 5.809 0 007.167 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-alarm_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-alarm_svg__cls-1"
      d="M8 23.5l.5-6H11V14a5 5 0 00-10 0v3.5h2.5l.5 6z"
    />
  );

export default SvgSingleManActionsAlarm;
