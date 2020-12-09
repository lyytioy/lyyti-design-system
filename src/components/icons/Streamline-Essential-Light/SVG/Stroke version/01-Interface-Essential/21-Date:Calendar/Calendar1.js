import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-1_svg__a"
      x={0.5}
      y={3.501}
      width={22}
      height={20}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-1_svg__a"
      d="M3.5 1.501v3M7.5 1.501v3M11.5 1.501v3M15.5 1.501v3M19.5 1.501v3M12.5 8.5h3v4h-4v-3a1 1 0 011-1zM15.5 8.5h3a1 1 0 011 1v3h-4v-4zM11.5 12.501h4v4h-4zM15.5 12.501h4v4h-4zM11.5 16.501h4v4h-4z"
    />,
    <path
      className="calendar-1_svg__a"
      d="M15.5 16.5h4v3a1 1 0 01-1 1h-3v-4zM4.5 12.5h3v4h-4v-3a1 1 0 011-1zM7.5 12.501h4v4h-4zM3.5 16.5h4v4h-3a1 1 0 01-1-1v-3zM7.5 16.501h4v4h-4z"
    />
  );

export default SvgCalendar1;
