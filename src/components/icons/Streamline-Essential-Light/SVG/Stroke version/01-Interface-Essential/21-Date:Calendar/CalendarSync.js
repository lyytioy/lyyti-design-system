import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-sync_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-sync_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M17 10.501v4h-4M16.9 14.5a5 5 0 10-.9 4"
    />
  );

export default SvgCalendarSync;
