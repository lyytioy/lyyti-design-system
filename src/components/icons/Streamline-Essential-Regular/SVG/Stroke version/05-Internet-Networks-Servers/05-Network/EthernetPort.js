import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEthernetPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ethernet-port_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="ethernet-port_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="ethernet-port_svg__a"
      d="M18 6H6a1.5 1.5 0 00-1.5 1.5v6A1.5 1.5 0 006 15h3v1.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V15h3a1.5 1.5 0 001.5-1.5v-6A1.5 1.5 0 0018 6zM12 6v3.75M8.25 6v3.75M15.75 6v3.75"
    />
  );

export default SvgEthernetPort;
