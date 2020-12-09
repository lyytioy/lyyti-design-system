import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatchHalf1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-half-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-half-1_svg__a"
      d="M13.5.501h-2M12.5.501v3M12.5 23.5a10 10 0 010-20zM19.5 13.501h-2M17.5 8.501l-1.5 1.5M17.5 18.501l-1.5-1.5M5.5 13.501h2M7.5 18.501l1.5-1.5M7.5 8.501l1.5 1.5M4.5 3.501L3 5.001M3.75 4.251l1.934 1.933"
    />
  );

export default SvgTimeStopwatchHalf1;
