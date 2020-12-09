import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-add_svg__a,.calendar-add_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px}.calendar-add_svg__a{stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path className="calendar-add_svg__a" d="M12 13.5v6M9 16.5h6" />,
    <rect
      className="calendar-add_svg__b"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="calendar-add_svg__b" d="M.75 9.75h22.5" />,
    <path className="calendar-add_svg__a" d="M6.75 6V.75M17.25 6V.75" />
  );

export default SvgCalendarAdd;
