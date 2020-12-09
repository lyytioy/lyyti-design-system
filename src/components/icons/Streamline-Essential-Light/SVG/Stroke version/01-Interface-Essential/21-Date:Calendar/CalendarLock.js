import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-lock_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-lock_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23"
    />,
    <rect
      className="calendar-lock_svg__a"
      x={7.5}
      y={13.501}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-lock_svg__a"
      d="M12 16a1 1 0 101 1 1 1 0 00-1-1zM9.5 13.5V12a2.5 2.5 0 115 0v1.5"
    />
  );

export default SvgCalendarLock;
