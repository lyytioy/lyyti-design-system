import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarDate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-date_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="calendar-date_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={21}
      rx={1}
      ry={1}
    />,
    <path
      className="calendar-date_svg__a"
      d="M5.5.501v5M18.5.501v5M.5 7.501h23M6.5 19.001h5M9 19v-7.5a.5.5 0 00-.812-.391L6.5 12.46M15.5 19l2.931-7.255a.469.469 0 00-.005-.5.546.546 0 00-.464-.245H14a.5.5 0 00-.5.5v1"
    />
  );

export default SvgCalendarDate;
