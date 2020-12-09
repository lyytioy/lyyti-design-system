import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArduinoCircuit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arduino-circuit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="arduino-circuit_svg__a"
      d="M5.25 6v2.25M2.25 9.75a1.5 1.5 0 01-1.5-1.5v-3a1.5 1.5 0 011.5-1.5"
    />,
    <path
      className="arduino-circuit_svg__a"
      d="M2.25 9.75v12a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-3l2.171-1.085a1.5 1.5 0 00.829-1.342v-4.146a1.5 1.5 0 00-.829-1.342L20.25 9.75v-7.5a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v1.5"
    />,
    <rect
      className="arduino-circuit_svg__a"
      x={8.25}
      y={5.25}
      width={4.5}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="arduino-circuit_svg__a"
      d="M16.5 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.5 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.25 17.25h12v3h-12zM6.75 17.25v-1.5M11.25 17.25v-1.5M15.75 17.25v-1.5"
    />
  );

export default SvgArduinoCircuit;
