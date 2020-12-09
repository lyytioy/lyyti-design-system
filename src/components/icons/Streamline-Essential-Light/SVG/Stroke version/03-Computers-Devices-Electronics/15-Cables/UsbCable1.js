import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbCable1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-cable-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="usb-cable-1_svg__a"
      d="M18.5 19.5a2 2 0 01-2 2h-9a2 2 0 01-2-2v-8h13zM9.5 23.5v-2h5v2M6.5.5h11v11h-11z"
    />,
    <path
      className="usb-cable-1_svg__a"
      d="M8.5 3.5h2v2h-2zM13.5 3.5h2v2h-2z"
    />
  );

export default SvgUsbCable1;
