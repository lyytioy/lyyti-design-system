import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="calendar_svg__a"
      x={0.752}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="calendar_svg__a"
      d="M.752 9.75h22.5M6.752 6V.75M17.252 6V.75"
    />
  );

export default SvgCalendar;
