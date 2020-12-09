import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatch3Quarters = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-3-quarters_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-3-quarters_svg__a"
      d="M10.525.503h2M11.525.503v3M19.525 3.503l1.5 1.5M20.275 4.253l-1.933 1.934M6.525 8.503l1.5 1.5M11.525 20.503v-2M6.525 18.503l1.5-1.5M18.525 13.503h-2M16.525 18.503l-1.5-1.5M16.525 8.503l-1.5 1.5M11.525 3.5v10h-10a10 10 0 1010-10z"
    />
  );

export default SvgTimeStopwatch3Quarters;
