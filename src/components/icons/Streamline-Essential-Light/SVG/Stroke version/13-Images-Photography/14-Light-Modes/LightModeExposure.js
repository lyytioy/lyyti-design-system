import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeExposure = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-exposure_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="light-mode-exposure_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="light-mode-exposure_svg__a"
      d="M22.914 1.086L1.086 22.914"
    />,
    <rect
      className="light-mode-exposure_svg__a"
      x={3.5}
      y={4.5}
      width={7}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="light-mode-exposure_svg__a"
      d="M20.5 16a.5.5 0 00-.5-.5h-1.5V14a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v1.5H14a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h1.5V20a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-1.5H20a.5.5 0 00.5-.5z"
    />
  );

export default SvgLightModeExposure;
