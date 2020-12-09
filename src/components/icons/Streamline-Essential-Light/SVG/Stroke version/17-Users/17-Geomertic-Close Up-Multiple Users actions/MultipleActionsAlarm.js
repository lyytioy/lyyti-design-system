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
      d="M22.719 19.086V17a3.5 3.5 0 00-3.688-3.495 3.633 3.633 0 00-3.312 3.695v1.888a3.412 3.412 0 01-.449 1.693.5.5 0 00.447.721h7a.5.5 0 00.448-.721 3.413 3.413 0 01-.446-1.695zM18.719 23.5h1M.719 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-alarm_svg__cls-1"
      cx={6.719}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-alarm_svg__cls-1"
      cx={16.219}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-alarm_svg__cls-1"
      d="M20.675 11.481a6 6 0 00-7.418-1.2"
    />
  );

export default SvgMultipleActionsAlarm;
