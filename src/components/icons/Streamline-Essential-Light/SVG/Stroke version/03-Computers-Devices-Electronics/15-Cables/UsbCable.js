import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbCable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-cable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="usb-cable_svg__a"
      d="M4.5 13.586a1 1 0 00.293.707L7.5 17v2.542a1 1 0 001 1h7a1 1 0 001-1V17l2.707-2.707a1 1 0 00.293-.707V9.5a2 2 0 00-2-2h-11a2 2 0 00-2 2zM16.5 1.5a1 1 0 00-1-1h-7a1 1 0 00-1 1v6h9z"
    />,
    <rect
      className="usb-cable_svg__a"
      x={9.5}
      y={2.5}
      width={5}
      height={3}
      rx={1}
      ry={1}
    />,
    <path
      className="usb-cable_svg__a"
      d="M12 20.542V23.5M9 13.5h6L12 10l-3 3.5z"
    />
  );

export default SvgUsbCable;
