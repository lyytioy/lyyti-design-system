import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-warning_svg__a"
      d="M3.032 7.6a8.944 8.944 0 0112.653 0M18.216 4.169a12.527 12.527 0 00-17.716 0M5.562 11.02a5.37 5.37 0 017.593 0M15.685 7.6a8.944 8.944 0 00-12.653 0M13.155 11.02a5.37 5.37 0 00-7.593 0M11.147 15.71a1.79 1.79 0 11-1.789-1.789 1.789 1.789 0 011.789 1.789zM17.358 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.358 18.5v-3"
    />,
    <path
      className="wifi-warning_svg__a"
      d="M18.2 12.5a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.108a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgWifiWarning;
