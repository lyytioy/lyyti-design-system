import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-lock_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-lock_svg__a"
      d="M4.5 23.25H3a1.5 1.5 0 01-1.5-1.5V5.25A1.5 1.5 0 013 3.75h18a1.5 1.5 0 011.5 1.5v16.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.5 9.75h21"
    />,
    <path
      className="calendar-lock_svg__a"
      d="M7.5 6V.75M16.5 6V.75M12 19.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <rect
      className="calendar-lock_svg__a"
      x={7.5}
      y={17.25}
      width={9}
      height={6}
      rx={0.375}
      ry={0.375}
    />,
    <path className="calendar-lock_svg__a" d="M9 17.25v-1.5a3 3 0 016 0v1.5" />
  );

export default SvgCalendarLock;
