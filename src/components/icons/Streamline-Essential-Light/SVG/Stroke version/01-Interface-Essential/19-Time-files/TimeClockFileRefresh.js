import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimeClockFileRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".time-clock-file-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="time-clock-file-refresh_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.294L19.207 4.5a1 1 0 01.293.707V8.5M8.189 15.327a5 5 0 116.019-6.513"
    />,
    <path
      className="time-clock-file-refresh_svg__a"
      d="M9.5 7.501v3h2M15 18.501h-3.5v3.5M22.917 19.734A5.572 5.572 0 0112.1 18.5M20 16.501h3.5v-3.5M12.083 15.268A5.572 5.572 0 0122.9 16.5"
    />
  );

export default SvgTimeClockFileRefresh;
