import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-home_svg__a"
      d="M12.75 15.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="time-clock-file-home_svg__a"
      d="M11.25 17.261l4.518-3.954a2.252 2.252 0 012.964 0l4.518 3.954M18.75 23.25h-3v-3a1.5 1.5 0 013 0zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V9.75"
    />,
    <circle
      className="time-clock-file-home_svg__a"
      cx={8.25}
      cy={9.75}
      r={4.5}
    />,
    <path className="time-clock-file-home_svg__a" d="M9.75 9.75h-1.5v-1.5" />
  );

export default SvgTimeClockFileHome;
