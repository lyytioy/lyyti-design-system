import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-cash_svg__a"
      d="M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.588l2.064.825a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle
      className="time-clock-file-cash_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="time-clock-file-cash_svg__a"
      d="M8.25 14.25a4.5 4.5 0 114.25-5.978M9.75 9.75h-1.5v-1.5"
    />,
    <path
      className="time-clock-file-cash_svg__a"
      d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871a1.5 1.5 0 01.439 1.061V7.5"
    />
  );

export default SvgTimeClockFileCash;
