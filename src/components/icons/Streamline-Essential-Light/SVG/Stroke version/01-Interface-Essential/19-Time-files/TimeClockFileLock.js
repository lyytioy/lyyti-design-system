import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-lock_svg__a"
      d="M11 23.5H1.5a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <rect
      className="time-clock-file-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle
      className="time-clock-file-lock_svg__a"
      cx={19}
      cy={19.564}
      r={1.25}
    />,
    <path
      className="time-clock-file-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 10-5 0v1.5h5z"
    />,
    <circle
      className="time-clock-file-lock_svg__a"
      cx={9.5}
      cy={10.501}
      r={5}
    />,
    <path className="time-clock-file-lock_svg__a" d="M9.5 7.501v3h2" />
  );

export default SvgTimeClockFileLock;
