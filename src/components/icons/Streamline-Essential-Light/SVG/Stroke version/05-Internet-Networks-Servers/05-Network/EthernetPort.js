import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEthernetPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ethernet-port_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ethernet-port_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="ethernet-port_svg__a"
      d="M4.5 4.5a1 1 0 00-1 1v10a1 1 0 001 1h5V18a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-1.5h5a1 1 0 001-1v-10a1 1 0 00-1-1zM7.5 4.5v4M10.5 4.5v4M13.5 4.5v4M16.5 4.5v4"
    />
  );

export default SvgEthernetPort;
