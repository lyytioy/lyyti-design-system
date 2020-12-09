import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-3_svg__a"
      x={0.75}
      y={3.75}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="calendar-3_svg__a"
      d="M.75 9.75h22.5M6.75 6V.75M17.25 6V.75M5.625 13.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.625 18.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 13.5a.375.375 0 10.375.375A.375.375 0 0012 13.5M12 18.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.375 13.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.375 18.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgCalendar3;
