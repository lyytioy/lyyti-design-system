import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbTypeC = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-type-c_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="usb-type-c_svg__a"
      d="M15.5 1.5a1 1 0 00-1-1h-4a1 1 0 00-1 1v4h6zM11.5 13.5v3M13.5 13.542V16.5"
    />,
    <rect
      className="usb-type-c_svg__a"
      x={8.5}
      y={5.5}
      width={8}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="usb-type-c_svg__a"
      d="M2.5 23.5v-5M1.5 18.5h2M22.5 18.5a2 2 0 00-2 2v1a2 2 0 002 2M9.5 23.5v-5M9.5 18.5h.5a1.5 1.5 0 010 3h-.5M15.5 23.5h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1M13.5 21.5h2M5.5 18.5V20a1 1 0 002 0v-1.5M6.5 21v2.5M17.5 21.5h1M11.5.5v2M13.5.5v2"
    />
  );

export default SvgUsbTypeC;
