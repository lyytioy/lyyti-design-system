import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeHdr = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-hdr_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-hdr_svg__a"
      d="M5.25 15.75v-7.5M8.25 15.75v-7.5M5.25 12h3M17.25 15.75v-7.5M17.25 8.25h1.125a1.875 1.875 0 010 3.75H17.25M20.25 15.75L18 12M11.25 15.75a3 3 0 003-3v-1.5a3 3 0 00-3-3z"
    />,
    <rect
      className="light-mode-hdr_svg__a"
      x={0.75}
      y={4.5}
      width={22.5}
      height={15}
      rx={4.5}
      ry={4.5}
    />
  );

export default SvgLightModeHdr;
