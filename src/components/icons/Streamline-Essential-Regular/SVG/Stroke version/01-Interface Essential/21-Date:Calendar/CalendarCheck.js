import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-check_svg__a,.calendar-check_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px}.calendar-check_svg__b{stroke-linecap:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-check_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="calendar-check_svg__a" d="M.75 9.75h22.5" />,
    <path
      className="calendar-check_svg__b"
      d="M6.75 6V.75M17.25 6V.75M15.75 13.5l-4.5 6-3-3"
    />
  );

export default SvgCalendarCheck;
