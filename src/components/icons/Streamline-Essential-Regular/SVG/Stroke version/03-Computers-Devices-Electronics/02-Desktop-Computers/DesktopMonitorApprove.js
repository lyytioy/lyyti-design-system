import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorApprove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-approve_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-approve_svg__a"
      d="M23.25 6.75a6 6 0 11-6-6M23.25 2.25l-5.47 5.469a.749.749 0 01-1.06 0L15 6M15.75 23.25h-7.5l.75-3h6l.75 3zM6 23.25h12M.75 17.25h22.5"
    />,
    <path
      className="desktop-monitor-approve_svg__a"
      d="M23.25 14.25v3a3 3 0 01-3 3H3.75a3 3 0 01-3-3V6.75a3 3 0 013-3h4.5"
    />
  );

export default SvgDesktopMonitorApprove;
