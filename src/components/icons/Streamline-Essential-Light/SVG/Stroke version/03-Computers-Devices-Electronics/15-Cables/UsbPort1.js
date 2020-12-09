import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbPort1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-port-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="usb-port-1_svg__a" cx={12} cy={21} r={2.5} />,
    <path
      className="usb-port-1_svg__a"
      d="M12 18.5V.5M14.5 3L12 .5 9.5 3M12 14l3.152-1.97A2.015 2.015 0 0016 10.5v-2M12 16l-3.152-1.97A2.015 2.015 0 018 12.5v-2"
    />,
    <rect
      className="usb-port-1_svg__a"
      x={14.5}
      y={5.5}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="usb-port-1_svg__a" cx={8} cy={9} r={1.5} />
  );

export default SvgUsbPort1;
