import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="desktop-monitor-lock_svg__a"
      x={9}
      y={7.5}
      width={6}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="desktop-monitor-lock_svg__a"
      d="M12 4.5a2 2 0 00-2 2v1h4v-1a2 2 0 00-2-2zM12 9.77a.25.25 0 11-.25.25.25.25 0 01.25-.25M9 22.5a6.979 6.979 0 001.5-4M15 22.5a6.979 6.979 0 01-1.5-4M7.499 22.5h9M.5 15.5h23"
    />,
    <rect
      className="desktop-monitor-lock_svg__a"
      x={0.5}
      y={1.5}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />
  );

export default SvgDesktopMonitorLock;
