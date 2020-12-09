import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardUsb = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-usb_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-usb_svg__a"
      d="M12 20.25a6 6 0 01-6-6v-4.5a6 6 0 016-6 6 6 0 016 6v4.5a6 6 0 01-6 6zM6 11.25h12"
    />,
    <path
      className="keyboard-usb_svg__a"
      d="M19.5 3.615A11.248 11.248 0 1110.3.878 1.5 1.5 0 0112 2.374v8.876"
    />
  );

export default SvgKeyboardUsb;
