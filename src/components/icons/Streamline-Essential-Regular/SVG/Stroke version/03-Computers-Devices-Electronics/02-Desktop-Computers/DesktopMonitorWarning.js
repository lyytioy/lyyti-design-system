import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="desktop-monitor-warning_svg__a"
      cx={17.25}
      cy={10.125}
      r={0.375}
    />,
    <path
      className="desktop-monitor-warning_svg__a"
      d="M17.25 7.5v-3M23.063 10.182a1.774 1.774 0 01-1.587 2.568h-8.452a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.774 1.774 0 013.174 0zM15.75 23.25h-7.5l.75-3h6l.75 3zM6 23.25h12M.75 17.25h22.5"
    />,
    <path
      className="desktop-monitor-warning_svg__a"
      d="M23.25 15.75v1.5a3 3 0 01-3 3H3.75a3 3 0 01-3-3V6.75a3 3 0 013-3h6.75"
    />
  );

export default SvgDesktopMonitorWarning;
