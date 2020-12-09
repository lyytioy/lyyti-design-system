import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-edit_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="calendar-edit_svg__a"
      d="M.75 9.75h22.5M6.75 6V.75M17.25 6V.75M10.779 19.745l-2.529.5.506-2.529 4.552-4.552a1.432 1.432 0 012.023 0 1.43 1.43 0 010 2.023z"
    />
  );

export default SvgCalendarEdit;
