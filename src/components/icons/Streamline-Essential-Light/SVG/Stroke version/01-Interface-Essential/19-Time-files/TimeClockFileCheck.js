import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-check_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M9.042 15.48A5 5 0 1114.4 9.5"
    />,
    <path className="time-clock-file-check_svg__a" d="M9.5 7.501v3h2" />,
    <circle
      className="time-clock-file-check_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path
      className="time-clock-file-check_svg__a"
      d="M20.174 15.756l-2.905 3.874a.751.751 0 01-1.131.08l-1.5-1.5"
    />
  );

export default SvgTimeClockFileCheck;
