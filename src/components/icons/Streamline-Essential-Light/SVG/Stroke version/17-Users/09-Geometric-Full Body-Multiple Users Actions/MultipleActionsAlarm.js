import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsAlarm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-alarm_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-alarm_svg__cls-1"
      d="M23 19.086V17a3.5 3.5 0 00-3.688-3.495A3.633 3.633 0 0016 17.2v1.888a3.413 3.413 0 01-.45 1.693.5.5 0 00.45.719h7a.5.5 0 00.448-.721A3.413 3.413 0 0123 19.086zM19 23.5h1M8 23.5l.5-6H11V14a5 5 0 00-10 0v3.5h2.5l.5 6z"
    />,
    <circle
      className="multiple-actions-alarm_svg__cls-1"
      cx={6}
      cy={4}
      r={3.5}
    />,
    <circle
      className="multiple-actions-alarm_svg__cls-1"
      cx={14.5}
      cy={4.5}
      r={3}
      id="multiple-actions-alarm_svg___Group_"
      data-name="&lt;Group&gt;"
    />,
    <path
      className="multiple-actions-alarm_svg__cls-1"
      d="M18.768 11.5a5 5 0 00-6.825-1.83"
    />
  );

export default SvgMultipleActionsAlarm;
