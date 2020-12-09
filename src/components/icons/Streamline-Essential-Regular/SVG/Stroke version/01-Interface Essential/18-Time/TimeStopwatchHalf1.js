import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatchHalf1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-half-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-half-1_svg__a"
      d="M7.272 7.522L5.375 5.625M5.75 5.25L5 6M13.25 5.25V.75M11 .75h4.5"
    />,
    <path
      d="M13.25 23.25a9 9 0 010-18z"
      fillRule="evenodd"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      className="time-stopwatch-half-1_svg__a"
      d="M19.625 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.758 9.367a.376.376 0 10.265.11.374.374 0 00-.265-.11M17.758 18.383a.375.375 0 00-.265.64.374.374 0 00.53 0 .375.375 0 00-.265-.64M7.625 13.875A.375.375 0 108 14.25a.375.375 0 00-.375-.375M9.272 9.9a.375.375 0 00-.265.64.375.375 0 10.265-.64M9.272 17.853a.375.375 0 00-.265.64.375.375 0 10.265-.64"
    />
  );

export default SvgTimeStopwatchHalf1;
