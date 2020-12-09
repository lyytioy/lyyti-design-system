import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbPort1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-port-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="usb-port-1_svg__a" cx={12} cy={20.25} r={3} />,
    <path
      className="usb-port-1_svg__a"
      d="M9.75 3L12 .75 14.25 3M12 .75v16.5M16.5 5.25h3v3h-3z"
    />,
    <circle className="usb-port-1_svg__a" cx={6} cy={9.75} r={1.5} />,
    <path
      className="usb-port-1_svg__a"
      d="M18 8.25v1.671a3 3 0 01-1.947 2.809L12 14.25M6 11.25v1.408a3 3 0 002.272 2.91L12 16.5"
    />
  );

export default SvgUsbPort1;
