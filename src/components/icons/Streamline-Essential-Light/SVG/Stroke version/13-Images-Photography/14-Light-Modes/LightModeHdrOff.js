import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeHdrOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-hdr-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-hdr-off_svg__a"
      d="M21.741 18.913A3.988 3.988 0 0023 16v-6a4 4 0 00-4-4H8.828M3.474 6.3A4 4 0 001 10v6a4 4 0 004 4h12.172M1 1l22 22M8 10.991V17M4 17V9M4 13h4"
    />,
    <path
      className="light-mode-hdr-off_svg__a"
      d="M20 11a2 2 0 01-2 2h-2V9h2a2 2 0 012 2zM20 17l-4-4M11.55 9.311a4.014 4.014 0 012.158 2.189M13.129 15.492A3.993 3.993 0 0110 17v-4.514"
    />
  );

export default SvgLightModeHdrOff;
