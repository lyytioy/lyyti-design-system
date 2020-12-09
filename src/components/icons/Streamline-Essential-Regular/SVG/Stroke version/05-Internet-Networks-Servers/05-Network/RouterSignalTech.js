import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRouterSignalTech = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".router-signal-tech_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="router-signal-tech_svg__a"
      x={2.25}
      y={18}
      width={19.5}
      height={5.25}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="router-signal-tech_svg__a"
      d="M5.25 21h1.3M9.2 21h1.3M16.687 12.187a8.449 8.449 0 00-9.373 0M15.245 15a5.853 5.853 0 00-6.49 0M2.036 7.5h6.428A1.265 1.265 0 009.75 6.258V1.993A1.265 1.265 0 008.464.75H2.036A1.265 1.265 0 00.75 1.993v4.265A1.265 1.265 0 002.036 7.5z"
    />,
    <path
      className="router-signal-tech_svg__a"
      d="M5.25 7.5v2.25h-1.5M19.5 10.5h2.55a1.164 1.164 0 001.2-1.125v-7.5A1.164 1.164 0 0022.05.75h-3.6a1.164 1.164 0 00-1.2 1.125V8.25M17.25 7.5h6"
    />
  );

export default SvgRouterSignalTech;
