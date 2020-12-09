import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDesktopMonitorSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".desktop-monitor-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="desktop-monitor-settings_svg__a"
      cx={17.75}
      cy={6.969}
      r={1.437}
    />,
    <path
      className="desktop-monitor-settings_svg__a"
      d="M18.971 1.408L19.4 2.8a.953.953 0 001.124.653l1.412-.328a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.305l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.327a.951.951 0 00-1.124.653l-.424 1.392a1.275 1.275 0 01-2.442 0l-.424-1.392a.951.951 0 00-1.124-.653l-1.412.327a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.305l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.328a.953.953 0 001.119-.653l.424-1.392a1.275 1.275 0 012.442 0zM.5 16.5h21"
    />,
    <path
      className="desktop-monitor-settings_svg__a"
      d="M21.5 13.5v5a1 1 0 01-1 1h-19a1 1 0 01-1-1v-13a1 1 0 011-1h8M8 23.5a6.979 6.979 0 001.5-4M14 23.5a6.979 6.979 0 01-1.5-4M6.5 23.5h9"
    />
  );

export default SvgDesktopMonitorSettings;
