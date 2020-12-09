import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="calendar-home_svg__a" d="M12.5 16.308v7.193h9v-7.193" />,
    <path
      className="calendar-home_svg__a"
      d="M10.5 18.001l6.5-5.5 6.5 5.5M18.5 23.5h-3v-3a1.5 1.5 0 013 0z"
    />,
    <path
      className="calendar-home_svg__a"
      d="M8.5 18.5h-7a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1v9M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarHome;
