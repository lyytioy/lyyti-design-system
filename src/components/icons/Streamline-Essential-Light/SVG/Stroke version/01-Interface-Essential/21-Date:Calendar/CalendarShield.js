import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".calendar-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="calendar-shield_svg__a"
      d="M9.5 18.5h-8a1 1 0 01-1-1v-14a1 1 0 011-1h18a1 1 0 011 1v6M5.5.501v5M15.5.501v5M.5 7.501h20M17.5 13.501v6M20.5 16.501h-6"
    />,
    <path
      className="calendar-shield_svg__a"
      d="M18.035 23.4l.553-.21c2.63-1 4.912-3.524 4.912-6.339v-3.394a1.044 1.044 0 00-.628-.958 15.814 15.814 0 00-5.394-1 15.521 15.521 0 00-5.35 1 1.044 1.044 0 00-.628.958v3.392c0 2.815 2.238 5.337 4.868 6.339l.553.21a1.561 1.561 0 001.114.002z"
    />
  );

export default SvgCalendarShield;
