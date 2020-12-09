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
      d="M.75 16.875a6.753 6.753 0 019.4-6.208M3.376 4.611v1a5.918 5.918 0 01-.859 3.269M11.623 4.611v1a5.909 5.909 0 00.86 3.273M3.387 4.83A5.489 5.489 0 007.5 2.93a5.486 5.486 0 004.112 1.9"
    />,
    <circle
      className="single-woman-actions-alarm_svg__cls-1"
      cx={7.5}
      cy={4.5}
      r={4.125}
    />,
    <path
      className="single-woman-actions-alarm_svg__cls-1"
      d="M18 11.625a3.75 3.75 0 013.75 3.75v3a1.5 1.5 0 001.5 1.5h-10.5a1.5 1.5 0 001.5-1.5v-3a3.75 3.75 0 013.75-3.75zM18 22.125a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgSingleWomanActionsAlarm;
