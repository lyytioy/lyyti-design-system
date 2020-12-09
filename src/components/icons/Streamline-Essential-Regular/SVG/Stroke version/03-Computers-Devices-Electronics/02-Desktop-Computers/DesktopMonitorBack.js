import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorBack = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-back_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-back_svg__a"
      d="M15.759 21.75h-7.5L9.55 14a1.5 1.5 0 011.48-1.253h1.958A1.5 1.5 0 0114.468 14zM8.259 21.75h10.5"
    />,
    <path
      className="desktop-monitor-back_svg__a"
      d="M15.009 17.25h6.42a1.5 1.5 0 001.471-1.794l-2.4-12a1.5 1.5 0 00-1.471-1.206H2.589a1.5 1.5 0 00-1.471 1.794l2.4 12a1.5 1.5 0 001.471 1.206h4.02M18.759 14.25h-1.5"
    />
  );

export default SvgDesktopMonitorBack;
