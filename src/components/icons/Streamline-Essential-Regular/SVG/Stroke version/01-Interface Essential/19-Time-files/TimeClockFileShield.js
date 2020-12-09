import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-shield_svg__a"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.669 7.669 0 01-6-7.5v-3.541a1.5 1.5 0 01.915-1.381 12.535 12.535 0 0110.17 0 1.5 1.5 0 01.915 1.381zM17.25 12.75v6M14.25 15.75h6M8.25 14.25a4.5 4.5 0 113.957-6.645"
    />,
    <path className="time-clock-file-shield_svg__a" d="M9.75 9.75h-1.5v-1.5" />,
    <path
      className="time-clock-file-shield_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V6.75"
    />
  );

export default SvgTimeClockFileShield;
