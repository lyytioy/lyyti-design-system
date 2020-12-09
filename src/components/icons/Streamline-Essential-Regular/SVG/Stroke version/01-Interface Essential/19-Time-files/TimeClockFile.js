import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="time-clock-file_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="time-clock-file_svg__a"
      d="M19.902 17.25H17.25v-2.652M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />
  );

export default SvgTimeClockFile;
