import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileTimer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-timer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-timer_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M8.189 15.327a5 5 0 116.019-6.513"
    />,
    <path className="time-clock-file-timer_svg__a" d="M9.5 7.501v3H12" />,
    <circle
      className="time-clock-file-timer_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path className="time-clock-file-timer_svg__a" d="M19.5 17.501h-2v-3" />
  );

export default SvgTimeClockFileTimer;
