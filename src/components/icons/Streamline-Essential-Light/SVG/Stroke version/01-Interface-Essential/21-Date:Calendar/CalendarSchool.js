import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSchool = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-school_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-school_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-school_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M16 14.834v2.486a1 1 0 01-.634.93l-3.015 1.187a1 1 0 01-.7 0L8.634 18.25A1 1 0 018 17.32v-2.486"
    />,
    <path
      className="calendar-school_svg__a"
      d="M12 11.501l-6 2.5 6 2.5 6-2.5-6-2.5zM6 14.001v3.5"
    />
  );

export default SvgCalendarSchool;
