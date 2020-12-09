import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-skull_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-skull_svg__a"
      d="M11.25 17.25h-9a1.5 1.5 0 01-1.5-1.5V3.765a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V10.5"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path
      className="calendar-skull_svg__a"
      d="M5.243 3.75v-3M12.743 3.75v-3M15.75 23.25V21l-.158-.079a2.425 2.425 0 01-1.342-2.171 4.5 4.5 0 019 0 2.425 2.425 0 01-1.342 2.171L21.75 21v2.25M18.75 21.75v1.5M16.875 18"
    />,
    <path
      className="calendar-skull_svg__a"
      d="M16.875 18a.375.375 0 10.375.375.375.375 0 00-.375-.375M20.625 18a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgCalendarSkull;
