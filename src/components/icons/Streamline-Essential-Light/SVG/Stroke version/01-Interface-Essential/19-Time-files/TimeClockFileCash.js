import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-cash_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M9.528 15.5A5 5 0 1114.4 9.483"
    />,
    <path
      className="time-clock-file-cash_svg__a"
      d="M9.5 7.501v3h2M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.825a1.342 1.342 0 01-.5 2.588H16M17.5 21.501v-1M17.5 14.501v-1"
    />,
    <circle
      className="time-clock-file-cash_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />
  );

export default SvgTimeClockFileCash;
