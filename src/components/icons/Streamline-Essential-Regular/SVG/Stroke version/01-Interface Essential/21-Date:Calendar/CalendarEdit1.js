import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarEdit1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-edit-1_svg__a{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-edit-1_svg__a"
      d="M22.63 14.786L15 22.416l-3.75.75.75-3.75 7.63-7.63a2.116 2.116 0 012.992 0l.008.008a2.114 2.114 0 010 2.992zM9 17.25H2.25a1.5 1.5 0 01-1.5-1.5V3.765a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V8.25"
    />,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 6.75h16.5"
    />,
    <path
      className="calendar-edit-1_svg__a"
      d="M5.243 3.75v-3M12.743 3.75v-3"
    />
  );

export default SvgCalendarEdit1;
