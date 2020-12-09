import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-warning_svg__a"
      d="M17.5 9a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 7V4"
    />,
    <path
      className="desktop-monitor-warning_svg__a"
      d="M18.338 1a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914zM.5 16.5h21"
    />,
    <path
      className="desktop-monitor-warning_svg__a"
      d="M21.5 14v4.5a1 1 0 01-1 1h-19a1 1 0 01-1-1v-13a1 1 0 011-1h9M8 23.5a6.979 6.979 0 001.5-4M14 23.5a6.979 6.979 0 01-1.5-4M6.5 23.5h9"
    />
  );

export default SvgDesktopMonitorWarning;
