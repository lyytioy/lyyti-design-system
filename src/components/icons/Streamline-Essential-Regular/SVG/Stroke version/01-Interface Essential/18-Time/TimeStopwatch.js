import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeStopwatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-stopwatch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-stopwatch_svg__a"
      d="M17.978 7.522l1.897-1.897M19.5 5.25l.75.75M12 5.25V.75M14.25.75h-4.5"
    />,
    <circle className="time-stopwatch_svg__a" cx={12} cy={14.25} r={9} />,
    <path
      className="time-stopwatch_svg__a"
      d="M12 8.25a.375.375 0 10.375.375A.375.375 0 0012 8.25M12 19.5a.375.375 0 10.375.375A.375.375 0 0012 19.5M6.375 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.625 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M8.023 9.9a.375.375 0 00-.266.64.375.375 0 10.531-.53.373.373 0 00-.265-.11M15.977 17.853a.372.372 0 00-.265.11.375.375 0 10.265-.11M8.023 17.853a.375.375 0 00-.266.64.375.375 0 10.531-.53.373.373 0 00-.265-.11M16.243 10.008a.374.374 0 00-.266-.11.372.372 0 00-.265.11.375.375 0 10.531 0"
    />
  );

export default SvgTimeStopwatch;
