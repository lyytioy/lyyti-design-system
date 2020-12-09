import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarAdd1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-add-1_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-add-1_svg__a"
      d="M8.25 17.25h-6a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v4.5"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path className="calendar-add-1_svg__a" d="M5.25 3.75v-3M12.75 3.75v-3" />,
    <circle className="calendar-add-1_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path className="calendar-add-1_svg__a" d="M17.25 14.25v6M14.25 17.25h6" />
  );

export default SvgCalendarAdd1;
