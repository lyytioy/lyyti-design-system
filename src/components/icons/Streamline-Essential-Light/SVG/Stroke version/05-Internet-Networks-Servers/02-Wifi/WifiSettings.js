import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-settings_svg__a"
      d="M3.032 7.6a8.944 8.944 0 0112.653 0M18.215 4.169a12.526 12.526 0 00-17.715 0M5.561 11.02a5.37 5.37 0 017.593 0M15.685 7.6a8.944 8.944 0 00-12.653 0M13.154 11.02a5.37 5.37 0 00-7.593 0M9.357 17.5a1.789 1.789 0 110-3.578"
    />,
    <circle
      className="wifi-settings_svg__a"
      cx={17.63}
      cy={16.968}
      r={1.437}
    />,
    <path
      className="wifi-settings_svg__a"
      d="M18.851 11.407l.424 1.392a.951.951 0 001.124.652l1.411-.327a1.283 1.283 0 011.222 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.222 2.126l-1.41-.322a.951.951 0 00-1.124.653l-.424 1.391a1.275 1.275 0 01-2.442 0l-.424-1.391a.951.951 0 00-1.125-.653l-1.411.327a1.283 1.283 0 01-1.221-2.126l.987-1.065a.96.96 0 000-1.3l-.987-1.065a1.283 1.283 0 011.221-2.126l1.411.327a.952.952 0 001.125-.652l.424-1.392a1.275 1.275 0 012.441-.005z"
    />
  );

export default SvgWifiSettings;
