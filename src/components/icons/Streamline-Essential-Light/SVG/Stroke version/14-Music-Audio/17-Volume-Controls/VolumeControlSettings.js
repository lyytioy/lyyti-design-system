import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-settings_svg__a"
      d="M12.5 10.3V1.957a1 1 0 00-1.707-.707L5.5 6.543H2a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.5l4 4M15.405 8.83a2.994 2.994 0 00-2.9-2.287"
    />,
    <circle
      className="volume-control-settings_svg__a"
      cx={17.75}
      cy={16.074}
      r={1.437}
    />,
    <path
      className="volume-control-settings_svg__a"
      d="M18.971 10.513l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.282 1.282 0 01-1.221 2.125l-1.412-.327a.951.951 0 00-1.124.653l-.424 1.392a1.275 1.275 0 01-2.442 0l-.424-1.392a.951.951 0 00-1.124-.653l-1.412.327a1.282 1.282 0 01-1.221-2.125l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442 0z"
    />
  );

export default SvgVolumeControlSettings;
