import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockMidnight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-midnight_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="time-clock-midnight_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="time-clock-midnight_svg__a"
      d="M4.125 11.625A.375.375 0 104.5 12a.375.375 0 00-.375-.375M6.432 6.057a.375.375 0 00-.266.64.375.375 0 10.531-.53.373.373 0 00-.265-.11M12 3.75a.375.375 0 10.375.375A.375.375 0 0012 3.75M17.568 6.057a.37.37 0 00-.265.11.375.375 0 10.265-.11M19.875 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.568 17.194a.37.37 0 00-.265.11.375.375 0 10.265-.11M12 19.5a.375.375 0 10.375.375A.375.375 0 0012 19.5M6.432 17.194a.375.375 0 00-.266.64.375.375 0 00.534-.534.373.373 0 00-.265-.11"
    />
  );

export default SvgTimeClockMidnight;
