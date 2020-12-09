import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatch3Quarters = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch-3-quarters_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch-3-quarters_svg__a"
      d="M12 19.5a.375.375 0 10.375.375A.375.375 0 0012 19.5M17.625 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.977 17.853a.372.372 0 00-.265.11.375.375 0 10.265-.11M8.023 17.853a.375.375 0 00-.266.64.375.375 0 10.531-.53.373.373 0 00-.265-.11M15.977 9.9a.372.372 0 00-.265.11.375.375 0 10.265-.11M18 7.5l1.875-1.875M19.5 5.25l.75.75M12 5.25V.75M14.25.75h-4.5"
    />,
    <path
      d="M12 5.25v9H3a9 9 0 109-9z"
      fillRule="evenodd"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      className="time-stopwatch-3-quarters_svg__a"
      d="M7.757 9.477a.374.374 0 00-.265-.11.376.376 0 10.265.11"
    />
  );

export default SvgTimeStopwatch3Quarters;
