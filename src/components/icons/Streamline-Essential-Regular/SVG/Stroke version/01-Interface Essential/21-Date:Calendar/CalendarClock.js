import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="calendar-clock_svg__a"
      d="M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5M.75 6.75h16.5M5.25 3.75v-3M12.75 3.75v-3"
    />,
    <circle className="calendar-clock_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path className="calendar-clock_svg__a" d="M19.902 17.25H17.25v-2.651" />
  );

export default SvgCalendarClock;
