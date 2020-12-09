import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-sync_svg__a"
      d="M3.032 7.6a8.945 8.945 0 0112.653 0M18.216 4.169a12.527 12.527 0 00-17.716 0M15.685 7.6a8.945 8.945 0 00-12.653 0M12.355 10.36a5.372 5.372 0 00-6.794.66M9.358 17.5a1.79 1.79 0 010-3.579M15 18.5h-3.5V22M22.917 19.733A5.572 5.572 0 0112.1 18.5M20 16.5h3.5V13M12.083 15.267A5.572 5.572 0 0122.9 16.5"
    />
  );

export default SvgWifiSync;
