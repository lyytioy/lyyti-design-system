import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileSettings = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-settings_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-settings_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="video-file-settings_svg__a"
      d="M12.607 10.89L7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l2.175-1.338"
    />,
    <circle
      className="video-file-settings_svg__a"
      cx={17.75}
      cy={17.031}
      r={1.437}
    />,
    <path
      className="video-file-settings_svg__a"
      d="M18.971 11.47l.424 1.392a.951.951 0 001.124.653l1.412-.327a1.283 1.283 0 011.221 2.126l-.988 1.065a.96.96 0 000 1.3l.988 1.065a1.283 1.283 0 01-1.221 2.126l-1.412-.328a.953.953 0 00-1.119.658l-.424 1.392a1.275 1.275 0 01-2.442 0l-.429-1.392a.953.953 0 00-1.124-.653l-1.412.328a1.283 1.283 0 01-1.221-2.126l.988-1.065a.96.96 0 000-1.3l-.988-1.065a1.283 1.283 0 011.221-2.126l1.412.327a.951.951 0 001.124-.653l.424-1.392a1.275 1.275 0 012.442-.005z"
    />
  );

export default SvgVideoFileSettings;
