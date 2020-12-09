import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarPlane = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-plane_svg__a,.calendar-plane_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px}.calendar-plane_svg__a{stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-plane_svg__a"
      d="M6.75 17.125l1.248 1.12M15.949 15.16l-1.724.826-3.744-3.361-2.093.825 3.046 3.636L8 18.245l1.8 1.621a1.5 1.5 0 001.552.28l5.694-2.2a1.5 1.5 0 00-1.1-2.791z"
    />,
    <rect
      className="calendar-plane_svg__b"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="calendar-plane_svg__b" d="M.75 9.75h22.5" />,
    <path className="calendar-plane_svg__a" d="M6.75 6V.75M17.25 6V.75" />
  );

export default SvgCalendarPlane;
