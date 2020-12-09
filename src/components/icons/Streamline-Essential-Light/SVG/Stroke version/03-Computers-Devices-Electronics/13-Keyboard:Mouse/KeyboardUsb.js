import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardUsb = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-usb_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-usb_svg__a"
      d="M8 14.5a4 4 0 008 0v-5a4 4 0 00-8 0zM8 9.5h7.5M20.87 4.14l-1.213 1.59a1 1 0 01-1.4.188L15.87 4.1 18.3.918l2.385 1.821a1 1 0 01.185 1.401zM14.888 2.09L16.101.5l1.59 1.213-1.213 1.59z"
    />,
    <path
      className="keyboard-usb_svg__a"
      d="M12 9.5V3.118a1.5 1.5 0 00-1.737-1.482A11 11 0 1020.138 5.1"
    />
  );

export default SvgKeyboardUsb;
