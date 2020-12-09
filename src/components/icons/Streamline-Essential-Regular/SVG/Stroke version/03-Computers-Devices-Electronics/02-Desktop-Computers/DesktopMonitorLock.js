import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-lock_svg__a"
      d="M15.75 23.25h-7.5l.75-3h6l.75 3zM6 23.25h12M.75 17.25h22.5M20.25 3.75a3 3 0 013 3v10.5a3 3 0 01-3 3H3.75a3 3 0 01-3-3V6.75a3 3 0 013-3"
    />,
    <path
      className="desktop-monitor-lock_svg__a"
      d="M12 7.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="desktop-monitor-lock_svg__a"
      x={7.5}
      y={5.25}
      width={9}
      height={6}
      rx={0.375}
      ry={0.375}
    />,
    <path
      className="desktop-monitor-lock_svg__a"
      d="M9 5.25v-1.5a3 3 0 016 0v1.5"
    />
  );

export default SvgDesktopMonitorLock;
