import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsMotor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-motor_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-motor_svg__a"
      x={6.75}
      y={5.25}
      width={10.5}
      height={12}
      rx={2.25}
      ry={2.25}
    />,
    <path
      className="electronics-motor_svg__a"
      d="M6.75 8.25h10.5M9.75 11.25v3M14.25 11.25v3M13.5 2.25a1.5 1.5 0 00-3 0v3h3zM9.75 17.25h4.5v3h-4.5zM12 20.25v3"
    />
  );

export default SvgElectronicsMotor;
