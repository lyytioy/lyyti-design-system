import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsMotor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-motor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-motor_svg__a"
      d="M11.5.5h1a1 1 0 011 1v3h-3v-3a1 1 0 011-1z"
    />,
    <rect
      className="electronics-motor_svg__a"
      x={5.5}
      y={4.5}
      width={13}
      height={14}
      rx={2}
      ry={2}
    />,
    <path
      className="electronics-motor_svg__a"
      d="M9.5 10.5l-1 1.5v3.5h1M14.5 10.5l1 1.5v3.5h-1M5.5 7.5h13M9.5 18.5h5v2h-5zM12 20.5v3"
    />
  );

export default SvgElectronicsMotor;
