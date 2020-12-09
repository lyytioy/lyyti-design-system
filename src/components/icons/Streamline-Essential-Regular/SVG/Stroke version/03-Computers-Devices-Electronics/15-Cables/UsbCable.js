import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="usb-cable_svg__a"
      d="M16.5 6.75h-9v-4.5A1.5 1.5 0 019 .75h6a1.5 1.5 0 011.5 1.5zM18 6.75H6a1.5 1.5 0 00-1.5 1.5v2.507a3 3 0 00.879 2.122L7.5 15v2.938a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15l2.121-2.121a3 3 0 00.879-2.122V8.25a1.5 1.5 0 00-1.5-1.5zM11.25 3.75h1.5"
    />,
    <path
      className="usb-cable_svg__a"
      d="M10.5 11.25l1.5-1.5 1.5 1.5M12 19.438v3.812"
    />
  );

export default SvgUsbCable;
