import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbTypeC = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-type-c_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="usb-type-c_svg__a"
      d="M3 9.38v-7.5M1.5 1.88h3M12.75 14.63a3 3 0 00-3 3v1.5a3 3 0 003 3M13.5 9.38v-7.5M13.5 1.88h.75a2.25 2.25 0 010 4.5h-.75M7.5 1.88v2.25a1.5 1.5 0 003 0V1.88M9 5.63v3.75M22.5 9.38H21a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M19.5 6.38h3"
    />
  );

export default SvgUsbTypeC;
