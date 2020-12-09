import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFire = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-fire_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="time-clock-fire_svg__a"
      cx={11.669}
      cy={16.5}
      r={6.75}
    />,
    <path className="time-clock-fire_svg__a" d="M10.75 12.75v3.75l3 2.25" />,
    <path
      className="time-clock-fire_svg__a"
      d="M18.379 15.764a5.48 5.48 0 003.79-5.264 7.558 7.558 0 00-2.25-5.25 2.6 2.6 0 01-3 2.25 5.69 5.69 0 01-1.5-6.75c-4.688 0-7.688 2.766-8.25 6.75a2.758 2.758 0 01-3-2.25c-3.764 3.2-2.853 9.043.789 10.517"
    />
  );

export default SvgTimeClockFire;
