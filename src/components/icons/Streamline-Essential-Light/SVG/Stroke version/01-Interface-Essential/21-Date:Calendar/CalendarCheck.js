import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-check_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-check_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M17 15.5a5 5 0 11-5-5"
    />,
    <path
      className="calendar-check_svg__a"
      d="M10 15l1.62 1.215a.5.5 0 00.684-.08L17 10.5"
    />
  );

export default SvgCalendarCheck;
