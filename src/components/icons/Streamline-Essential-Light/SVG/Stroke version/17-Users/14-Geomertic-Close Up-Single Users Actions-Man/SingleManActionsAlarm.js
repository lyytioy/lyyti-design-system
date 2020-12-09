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
      d="M22.5 20.5a.5.5 0 00.4-.792 4.03 4.03 0 01-.9-2.541v-1.5a4.116 4.116 0 00-3.6-4.148A4 4 0 0014 15.5v1.667a4.03 4.03 0 01-.9 2.541.5.5 0 00.4.792zM16.716 22.5a1.328 1.328 0 002.573 0M11 17.5H1a7 7 0 0111.5-5.363M3.838 2.592A7.049 7.049 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-alarm_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsAlarm;
