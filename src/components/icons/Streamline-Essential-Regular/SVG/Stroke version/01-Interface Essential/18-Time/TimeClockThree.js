import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockThree = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-three_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-three_svg__a"
      d="M10.523 2.25V13.5h11.25a11.25 11.25 0 00-11.25-11.25zM10.523 21a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.091 18.694a.37.37 0 00-.265.11.375.375 0 10.265-.11M4.955 18.694a.375.375 0 00-.266.64.375.375 0 00.531-.53.373.373 0 00-.265-.11M2.648 13.125a.375.375 0 10.375.375.375.375 0 00-.375-.375M4.955 7.557a.375.375 0 00-.266.64.375.375 0 00.531-.53.373.373 0 00-.265-.11"
    />,
    <path
      className="time-clock-three_svg__a"
      d="M16.091 7.557a.37.37 0 00-.265.11.375.375 0 10.265-.11"
    />
  );

export default SvgTimeClockThree;
