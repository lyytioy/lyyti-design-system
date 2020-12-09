import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="calendar-warning_svg__a"
      d="M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5M.75 6.75h16.5M5.25 3.75v-3M12.75 3.75v-3M17.25 19.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 17.25V15"
    />,
    <path
      className="calendar-warning_svg__a"
      d="M23.063 20.683a1.774 1.774 0 01-1.587 2.567h-8.452a1.774 1.774 0 01-1.587-2.567l4.226-8.452a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgCalendarWarning;
