import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-2_svg__a"
      d="M7.545 7.501l-3 16M11.795 7.501l-3 16M16.045 7.501l-3 16M16.465 23.5a1 1 0 00.983-.816l2.625-14A1 1 0 0019.09 7.5H4.125a1 1 0 00-.983.815l-2.625 14A1 1 0 001.5 23.5z"
    />,
    <path
      className="calendar-2_svg__a"
      d="M20.065 8.277l3.407 13.989A1 1 0 0122.5 23.5h-6.035M2.545 11.501h17M1.795 15.501h17M1.047 19.501h16.999"
    />
  );

export default SvgCalendar2;
