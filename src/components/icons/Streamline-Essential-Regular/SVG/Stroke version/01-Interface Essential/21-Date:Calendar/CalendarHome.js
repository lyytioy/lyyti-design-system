import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-home_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-home_svg__a"
      d="M12.75 15.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="calendar-home_svg__a"
      d="M11.25 17.261l4.518-3.954a2.252 2.252 0 012.964 0l4.518 3.954M18.75 23.25h-3v-3a1.5 1.5 0 013 0zM8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5V3.765a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V8.25"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path className="calendar-home_svg__a" d="M5.243 3.75v-3M12.743 3.75v-3" />
  );

export default SvgCalendarHome;
