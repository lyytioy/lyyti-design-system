import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="calendar-refresh_svg__a"
      d="M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5M.75 6.75h16.5M5.25 3.75v-3M12.75 3.75v-3M15 18.75h-3.75v3.75M22.667 19.484a5.573 5.573 0 01-10.74-.734M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733"
    />
  );

export default SvgCalendarRefresh;
