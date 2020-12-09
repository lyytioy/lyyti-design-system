import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFile1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="time-clock-file-1_svg__a" cx={12} cy={12.75} r={6} />,
    <path className="time-clock-file-1_svg__a" d="M14.652 12.75H12v-2.651" />,
    <path
      className="time-clock-file-1_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.427l3 2.882a1.5 1.5 0 01.453 1.074z"
    />
  );

export default SvgTimeClockFile1;
