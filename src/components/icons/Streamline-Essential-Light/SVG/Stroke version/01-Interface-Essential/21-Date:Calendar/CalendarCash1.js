import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarCash1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-cash-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-cash-1_svg__a"
      d="M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.825a1.342 1.342 0 01-.5 2.588H16M17.5 21.501v-1M17.5 14.501v-1"
    />,
    <circle className="calendar-cash-1_svg__a" cx={17.5} cy={17.501} r={6} />,
    <path
      className="calendar-cash-1_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1V10M5.5.501v5M15.5.501v5M.5 7.501h20"
    />
  );

export default SvgCalendarCash1;
