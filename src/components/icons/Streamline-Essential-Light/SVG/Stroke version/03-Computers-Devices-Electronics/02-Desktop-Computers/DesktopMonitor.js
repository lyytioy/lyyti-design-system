import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor_svg__a"
      d="M23.5 20.5H22l-1-1h-3l-1 1h-1.5v-13H17l1 1h3l1-1h1.5v13zM17.5 11.5h4M17.5 13.5h4"
    />,
    <path
      className="desktop-monitor_svg__a"
      d="M13.5 17.5h-12a1 1 0 01-1-1v-12a1 1 0 011-1h18a1 1 0 011 1v1M8.5 17.5v3M12.5 17.5v3M6.5 20.5h7"
    />
  );

export default SvgDesktopMonitor;
