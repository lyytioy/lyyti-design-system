import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatchHalf = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-half_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-half_svg__a"
      d="M16.728 7.522l1.897-1.897M18.25 5.25L19 6M10.75 5.25V.75M13 .75H8.5"
    />,
    <path
      d="M10.75 5.25v18a9 9 0 000-18z"
      fillRule="evenodd"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      className="time-stopwatch-half_svg__a"
      d="M4.375 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M6.242 18.383a.375.375 0 00-.265.64.375.375 0 10.53-.53.374.374 0 00-.265-.11M5.977 9.477a.374.374 0 10.265-.11.374.374 0 00-.265.11M16.375 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M14.727 17.853a.372.372 0 00-.265.11.375.375 0 10.265-.11M14.727 9.9a.372.372 0 00-.265.11.375.375 0 10.265-.11"
    />
  );

export default SvgTimeStopwatchHalf;
