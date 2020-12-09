import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-port_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="usb-port_svg__a"
      x={0.75}
      y={8.25}
      width={22.5}
      height={15}
      rx={3}
      ry={3}
    />,
    <circle className="usb-port_svg__a" cx={8.25} cy={15.75} r={4.5} />,
    <path
      className="usb-port_svg__a"
      d="M17.25 12.75h3M17.25 18.75h3M17.25 15.75h3M5.068 12.568l6.364 6.364M11.432 12.568l-6.364 6.364M23.126 10.4l-2.237-7.5A3 3 0 0018.014.75H5.986a3 3 0 00-2.875 2.143L.874 10.4"
    />
  );

export default SvgUsbPort;
