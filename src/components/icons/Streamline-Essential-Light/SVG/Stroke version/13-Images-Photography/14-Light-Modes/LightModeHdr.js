import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeHdr = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-hdr_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-hdr_svg__a"
      d="M20 10a2 2 0 01-2 2h-2V8h2a2 2 0 012 2zM16 16v-4M20 16l-4-4"
    />,
    <rect
      className="light-mode-hdr_svg__a"
      x={1}
      y={5}
      width={22}
      height={14}
      rx={4}
      ry={4}
    />,
    <path
      className="light-mode-hdr_svg__a"
      d="M8 8v8M4 16V8M4 12h4M10 8a4 4 0 010 8z"
    />
  );

export default SvgLightModeHdr;
