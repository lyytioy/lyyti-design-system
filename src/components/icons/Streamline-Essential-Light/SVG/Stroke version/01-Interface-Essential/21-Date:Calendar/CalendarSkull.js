import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-skull_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V9M5.5.501v5M15.5.501v5M.5 7.501h20"
    />,
    <circle className="calendar-skull_svg__a" cx={15} cy={16.501} r={1} />,
    <circle className="calendar-skull_svg__a" cx={20} cy={16.501} r={1} />,
    <path
      className="calendar-skull_svg__a"
      d="M16.5 23.501v-3M18.5 23.501v-3M23.5 16.5a6 6 0 10-12 0v2a1 1 0 001 1h.153a1 1 0 01.986.835l.222 2.329a1 1 0 00.986.836h5.306a1 1 0 00.986-.836l.222-2.329a1 1 0 01.986-.835h.153a1 1 0 001-1z"
    />
  );

export default SvgCalendarSkull;
