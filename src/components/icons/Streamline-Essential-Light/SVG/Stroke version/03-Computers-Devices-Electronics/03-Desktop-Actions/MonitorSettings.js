import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-settings_svg__a"
      d="M5.5 17.5h5M.5 11.5h11M8.5 14.5V16A1.5 1.5 0 017 17.5"
    />,
    <path
      className="monitor-settings_svg__a"
      d="M20.5 9.5v-8a1 1 0 00-1-1h-18a1 1 0 00-1 1v12a1 1 0 001 1h8"
    />,
    <circle
      className="monitor-settings_svg__a"
      cx={17.75}
      cy={17.031}
      r={1.437}
    />,
    <path
      className="monitor-settings_svg__a"
      d="M18.971 11.47l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.282 1.282 0 01-1.221 2.125l-1.412-.327a.952.952 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.952.952 0 00-1.124-.653l-1.412.327a1.282 1.282 0 01-1.221-2.125l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442-.005z"
    />
  );

export default SvgMonitorSettings;
