import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="time-clock-file-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="time-clock-file-lock_svg__a"
      d="M21.75 15.75v-1.5a3 3 0 00-3-3 3 3 0 00-3 3v1.5M18.75 19.155a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle
      className="time-clock-file-lock_svg__a"
      cx={8.25}
      cy={9.75}
      r={4.5}
    />,
    <path className="time-clock-file-lock_svg__a" d="M9.75 9.75h-1.5v-1.5" />,
    <path
      className="time-clock-file-lock_svg__a"
      d="M10.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V8.25"
    />
  );

export default SvgTimeClockFileLock;
