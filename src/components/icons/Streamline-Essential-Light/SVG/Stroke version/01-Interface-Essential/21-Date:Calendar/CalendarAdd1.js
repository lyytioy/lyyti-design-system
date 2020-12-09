import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarAdd1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-add-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-add-1_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />,
    <circle className="calendar-add-1_svg__a" cx={17.5} cy={17.501} r={6} />,
    <path className="calendar-add-1_svg__a" d="M17.5 14.501v6M20.5 17.501h-6" />
  );

export default SvgCalendarAdd1;
