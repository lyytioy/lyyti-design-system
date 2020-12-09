import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatchQuarter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-quarter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-quarter_svg__a"
      d="M10.525.501h2M11.525.501v3M19.525 3.501l1.5 1.5M20.275 4.251l-1.942 1.942M4.525 13.501h2M6.525 8.501l1.5 1.5M11.525 20.501v-2M6.525 18.501l1.5-1.5M16.525 18.501l-1.5-1.5M16.525 8.501l-1.5 1.5M11.525 13.5h10a10.029 10.029 0 00-10-10z"
    />
  );

export default SvgTimeStopwatchQuarter;
