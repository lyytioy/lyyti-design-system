import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeExposure = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-exposure_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-exposure_svg__a"
      d="M22.809 1.191L1.19 22.81M5.25 8.25h4.5M15 17.25h4.5M17.25 15v4.5"
    />,
    <rect
      className="light-mode-exposure_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgLightModeExposure;
