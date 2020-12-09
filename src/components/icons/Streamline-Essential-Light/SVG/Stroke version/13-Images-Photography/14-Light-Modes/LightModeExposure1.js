import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeExposure1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-exposure-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="light-mode-exposure-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="light-mode-exposure-1_svg__a"
      d="M1.086 22.914L22.914 1.086M3.5 6h7M17 13.5v7M13.5 17h7"
    />
  );

export default SvgLightModeExposure1;
