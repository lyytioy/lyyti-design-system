import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-cash_svg__a,.calendar-cash_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px}.calendar-cash_svg__b{stroke-linecap:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-cash_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="calendar-cash_svg__a" d="M.75 9.75h22.5" />,
    <path
      className="calendar-cash_svg__b"
      d="M6.75 6V.75M17.25 6V.75M13.5 13.5h-2.033a1.342 1.342 0 00-.5 2.588l2.064.825a1.342 1.342 0 01-.5 2.587H10.5M12 13.5v-.75M12 20.25v-.75"
    />
  );

export default SvgCalendarCash;
