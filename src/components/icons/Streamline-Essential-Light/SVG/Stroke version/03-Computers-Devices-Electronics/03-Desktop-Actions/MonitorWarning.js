import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-warning_svg__a"
      d="M5.5 17.5h6M.5 11.5h14M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-warning_svg__a"
      d="M20.5 11.5v-10a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h11M17.5 20.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 18.5v-3"
    />,
    <path
      className="monitor-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.635a.923.923 0 00.031.914.948.948 0 00.807.448h10.112a.949.949 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgMonitorWarning;
