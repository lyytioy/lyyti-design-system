import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsAlarm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-alarm_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-alarm_svg__cls-1"
      d="M.75 17.249a6.753 6.753 0 019.4-6.208"
    />,
    <circle
      className="single-neutral-actions-alarm_svg__cls-1"
      cx={7.5}
      cy={4.874}
      r={4.125}
    />,
    <path
      className="single-neutral-actions-alarm_svg__cls-1"
      d="M18 12a3.75 3.75 0 013.75 3.75v3a1.5 1.5 0 001.5 1.5h-10.5a1.5 1.5 0 001.5-1.5v-3A3.75 3.75 0 0118 12zM18 22.5a.375.375 0 11-.375.375A.375.375 0 0118 22.5"
    />
  );

export default SvgSingleNeutralActionsAlarm;
