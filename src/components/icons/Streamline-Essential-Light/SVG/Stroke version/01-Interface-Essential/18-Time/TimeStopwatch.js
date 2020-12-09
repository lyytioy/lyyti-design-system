import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch_svg__a"
      d="M10.525.503h2M11.525.503v3M19.525 3.503l1.5 1.5M20.275 4.253l-1.933 1.934M4.525 13.503h2M6.525 8.503l1.5 1.5M6.525 18.503l1.5-1.5M18.525 13.503h-2M11.525 20.503v-2M11.525 6.503v2M16.525 18.503l-1.5-1.5M16.525 8.503l-1.5 1.5"
    />,
    <circle className="time-stopwatch_svg__a" cx={11.525} cy={13.503} r={10} />
  );

export default SvgTimeStopwatch;
