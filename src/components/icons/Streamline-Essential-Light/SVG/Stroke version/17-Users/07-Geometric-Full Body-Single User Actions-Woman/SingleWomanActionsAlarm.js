import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsAlarm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-alarm_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-alarm_svg__cls-1"
      d="M22.5 20.5a.5.5 0 00.4-.792 4.03 4.03 0 01-.9-2.541v-1.5a4.116 4.116 0 00-3.607-4.153A4 4 0 0014 15.5v1.667a4.03 4.03 0 01-.9 2.541.5.5 0 00.4.792zM16.714 22.5a1.327 1.327 0 002.572 0M2.547 4.577A4.637 4.637 0 006 2.974a4.637 4.637 0 003.453 1.6"
    />,
    <circle
      className="single-woman-actions-alarm_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-woman-actions-alarm_svg__cls-1"
      d="M6 9a3.8 3.8 0 013.7 2.918l1.8 6.582H8.543l-1.054 5h-3l-1.054-5H.5l1.805-6.582A3.8 3.8 0 016 9z"
    />
  );

export default SvgSingleWomanActionsAlarm;
