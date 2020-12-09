import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarLock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-lock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-lock-1_svg__a"
      d="M12.5 18.5h-11a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1v6M5.5.501v5M15.5.501v5M.5 7.501h20"
    />,
    <rect
      className="calendar-lock-1_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle className="calendar-lock-1_svg__a" cx={19} cy={19.564} r={1.25} />,
    <path
      className="calendar-lock-1_svg__a"
      d="M21.5 14a2.5 2.5 0 10-5 0v1.5h5z"
    />
  );

export default SvgCalendarLock1;
