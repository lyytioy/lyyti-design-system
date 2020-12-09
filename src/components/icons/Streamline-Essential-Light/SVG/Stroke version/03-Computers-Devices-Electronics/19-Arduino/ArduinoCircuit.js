import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArduinoCircuit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arduino-circuit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="arduino-circuit_svg__a"
      d="M1.5 5.5v-2a1 1 0 011-1h18a1 1 0 011 1V8l1.6 1.2a1 1 0 01.4.8v6a1 1 0 01-.4.8L21.5 18v2.5a1 1 0 01-1 1h-18a1 1 0 01-1-1v-10"
    />,
    <path
      className="arduino-circuit_svg__a"
      d="M1.5 5.5h2v5h-2a1 1 0 01-1-1v-3a1 1 0 011-1z"
    />,
    <rect
      className="arduino-circuit_svg__a"
      x={6.5}
      y={15.5}
      width={12}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="arduino-circuit_svg__a"
      d="M17.75 5.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.75 8.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.25 5.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.25 8.75A.25.25 0 1114 9a.25.25 0 01.25-.25"
    />,
    <rect
      className="arduino-circuit_svg__a"
      x={6.5}
      y={6.5}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="arduino-circuit_svg__a"
      d="M8.5 14.5v1M12.5 14.5v1M16.5 14.5v1M8.5 17.5v1M12.5 17.5v1M16.5 17.5v1"
    />
  );

export default SvgArduinoCircuit;
