import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-sync_svg__a,.calendar-sync_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px}.calendar-sync_svg__b{stroke-linecap:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-sync_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="calendar-sync_svg__a" d="M.75 9.75h22.5" />,
    <path
      className="calendar-sync_svg__b"
      d="M6.75 6V.75M17.25 6V.75M11.344 15.75H9v-3"
    />,
    <path
      className="calendar-sync_svg__b"
      d="M9.118 15.75a3.925 3.925 0 013.632-3 3.75 3.75 0 11-2.931 6.089"
    />
  );

export default SvgCalendarSync;
