import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnectDeviceCancel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".connect-device-cancel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="connect-device-cancel_svg__a"
      d="M9.75 18a2.25 2.25 0 01-2.25 2.25H3A2.25 2.25 0 01.75 18V6A2.25 2.25 0 013 3.75h4.5A2.25 2.25 0 019.75 6M14.25 6a2.25 2.25 0 012.25-2.25H21A2.25 2.25 0 0123.25 6v12A2.25 2.25 0 0121 20.25h-4.5A2.25 2.25 0 0114.25 18M8.25 8.25l7.5 7.5M15.75 8.25l-7.5 7.5M.75 17.25h4.5M18.75 17.25h4.5"
    />
  );

export default SvgConnectDeviceCancel;
