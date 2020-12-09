import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-sync_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V9.5M8.189 15.327a5 5 0 116.019-6.513"
    />,
    <path
      className="time-clock-file-sync_svg__a"
      d="M9.5 7.501v3h2M20 17.495h3.5v-3.5M17.5 23.5a5.5 5.5 0 115.475-6"
    />,
    <path className="time-clock-file-sync_svg__a" d="M23.5 13.995v3.5H20" />
  );

export default SvgTimeClockFileSync;
