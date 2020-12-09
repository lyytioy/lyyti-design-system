import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatchHalf = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-half_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-half_svg__a"
      d="M10.525.503h2M11.525.503v3M19.525 3.503l1.5 1.5M20.275 4.253l-1.937 1.938M4.525 13.503h2M6.525 8.503l1.5 1.5M6.525 18.503l1.5-1.5M18.525 13.503h-2M16.525 18.503l-1.5-1.5M16.525 8.503l-1.5 1.5M11.525 3.5v20a10 10 0 000-20z"
    />
  );

export default SvgTimeStopwatchHalf;
