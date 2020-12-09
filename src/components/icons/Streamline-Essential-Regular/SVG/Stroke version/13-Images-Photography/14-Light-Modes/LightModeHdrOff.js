import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeHdrOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-hdr-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-hdr-off_svg__a"
      d="M5.25 16.5V9M8.25 16.5V9M5.25 12.75h3M17.25 16.5V9M17.25 9h1.125a1.875 1.875 0 010 3.75H17.25M20.25 16.5L18 12.75M11.25 16.5a3 3 0 003-3V12a3 3 0 00-3-3z"
    />,
    <path
      className="light-mode-hdr-off_svg__a"
      d="M15.754 20.25H5.25a4.5 4.5 0 01-4.5-4.5v-6A4.491 4.491 0 012.249 6.4M8.993 5.25h9.757a4.5 4.5 0 014.5 4.5v6a4.48 4.48 0 01-1.146 3M.75.75l22.5 22.5"
    />
  );

export default SvgLightModeHdrOff;
