import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-shield_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M9 15.476A5 5 0 1114.271 9"
    />,
    <path
      className="time-clock-file-shield_svg__a"
      d="M9.5 7.501v3h2M17.5 13.501v6M20.5 16.501h-6M18.035 23.4l.553-.21c2.63-1 4.912-3.524 4.912-6.339v-3.394a1.044 1.044 0 00-.628-.958 15.814 15.814 0 00-5.394-1 15.521 15.521 0 00-5.35 1 1.044 1.044 0 00-.628.958v3.392c0 2.815 2.238 5.337 4.868 6.339l.553.21a1.561 1.561 0 001.114.002z"
    />
  );

export default SvgTimeClockFileShield;
