import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarSchool = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-school_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-school_svg__a"
      d="M6.75 17.25h-4.5a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v7.5"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path
      className="calendar-school_svg__a"
      d="M5.25 3.75v-3M12.75 3.75v-3M16.5 14.308l-6.75 2.779 6.75 2.471 6.75-2.471-6.75-2.779zM9.75 17.087v3.75"
    />,
    <path
      className="calendar-school_svg__a"
      d="M12.75 18.186V21.3a.751.751 0 00.471.7l3 1.2a.758.758 0 00.558 0l3-1.2a.751.751 0 00.471-.7v-3.114"
    />
  );

export default SvgCalendarSchool;
