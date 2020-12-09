import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="calendar-2_svg__a"
      d="M21 3H3L.75 21h18L21 3zM21 3l2.25 18M9 3L6.75 21M15 3l-2.25 18M2.437 7.5h18M1.312 16.5h18M1.875 12h18"
    />
  );

export default SvgCalendar2;
