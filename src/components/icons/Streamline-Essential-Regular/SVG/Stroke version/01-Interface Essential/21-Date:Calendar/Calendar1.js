import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-1_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="calendar-1_svg__a"
      d="M6.75 6V.75M17.25 6V.75M5.25 14.25h4.5v4.5h-4.5zM14.25 9.75v9M9.75 9.75h9v9h-9zM9.75 14.25h9"
    />
  );

export default SvgCalendar1;
