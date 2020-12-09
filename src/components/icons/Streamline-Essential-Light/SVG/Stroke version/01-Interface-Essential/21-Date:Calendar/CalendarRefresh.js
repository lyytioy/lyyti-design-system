import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-refresh_svg__a"
      d="M15 18.501h-3.5v3.5M22.917 19.734A5.572 5.572 0 0112.1 18.5M20 16.501h3.5v-3.5M12.083 15.268A5.572 5.572 0 0122.9 16.5"
    />,
    <path
      className="calendar-refresh_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarRefresh;
