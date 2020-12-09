import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorBack = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-back_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="desktop-monitor-back_svg__a"
      d="M8.946 18H4.191a1.014 1.014 0 01-1-.816l-2.673-14a.989.989 0 01.218-.823A1.023 1.023 0 011.518 2h18.291a1.014 1.014 0 011 .816l2.673 14a.989.989 0 01-.218.823 1.023 1.023 0 01-.783.361H13.5"
    />,
    <path
      className="desktop-monitor-back_svg__a"
      d="M13.5 22H7.927l2.037-8H13.5v8zM13.5 22h4M17.6 13.5l.204 1.005M19.636 13.5l.204 1.003"
    />
  );

export default SvgDesktopMonitorBack;
