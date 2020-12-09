import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-glasses_svg__a"
      d="M2.451 18.861a4.436 4.436 0 007.914.986l.778-1.216a1.92 1.92 0 013.214 0l.778 1.216a4.418 4.418 0 003.724 2.014 4.339 4.339 0 004.391-4.285v-6.215h-21v3M2.25 11.361l3.267-7.35A3.154 3.154 0 018.4 2.139h1.023M23.25 11.361l-3.267-7.35A3.154 3.154 0 0017.1 2.139h-1.023"
    />,
    <rect
      className="camera-glasses_svg__a"
      x={0.75}
      y={14.361}
      width={7.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgCameraGlasses;
