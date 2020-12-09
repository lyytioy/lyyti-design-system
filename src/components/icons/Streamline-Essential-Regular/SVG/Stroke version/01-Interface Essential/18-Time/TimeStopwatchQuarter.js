import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatchQuarter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-quarter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-quarter_svg__a"
      d="M17.228 8.772l1.897-1.897M18.75 6.5l.75.75M11.25 6.5V2M13.5 2H9M11.25 6.5v9h9a9 9 0 00-9-9zM11.25 21.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M4.875 15.125a.375.375 0 10.375.375.375.375 0 00-.375-.375M6.742 19.633a.375.375 0 00-.265.64.375.375 0 10.53-.53.374.374 0 00-.265-.11M15.758 19.633a.375.375 0 00-.265.64.374.374 0 00.53 0 .375.375 0 00-.265-.64M6.742 10.617a.376.376 0 10.265.11.374.374 0 00-.265-.11"
    />,
    <path
      className="time-stopwatch-quarter_svg__a"
      d="M14.962 11.258a.375.375 0 10.265-.11.372.372 0 00-.265.11"
    />
  );

export default SvgTimeStopwatchQuarter;
