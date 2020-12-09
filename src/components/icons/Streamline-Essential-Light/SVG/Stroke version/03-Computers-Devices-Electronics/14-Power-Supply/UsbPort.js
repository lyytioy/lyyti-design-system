import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUsbPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".usb-port_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="usb-port_svg__a"
      d="M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-14h23zM4.713 1.01A1 1 0 015.585.5h12.83a1 1 0 01.872.51L23.5 8.5H.5z"
    />,
    <circle className="usb-port_svg__a" cx={7.5} cy={16} r={5} />,
    <path
      className="usb-port_svg__a"
      d="M7.5 11v10M11.035 12.465l-7.07 7.07M12.5 16h-10M11.035 19.535l-7.07-7.07M16.75 12.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.25 12.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="usb-port_svg__a"
      d="M14.5 10.5h7v4h-7zM16.75 19.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.25 19.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path className="usb-port_svg__a" d="M14.5 17.5h7v4h-7z" />
  );

export default SvgUsbPort;
