import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnectDeviceExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".connect-device-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="connect-device-exchange_svg__a"
      d="M10.5 16.5V20a2 2 0 01-2 2h-6a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2v3.5M10.5 18H.5M13.5 7.5V4a2 2 0 012-2h6a2 2 0 012 2v16a2 2 0 01-2 2h-6a2 2 0 01-2-2v-3.5M23.5 18h-10M4.5 12h15"
    />,
    <path
      className="connect-device-exchange_svg__a"
      d="M7.5 15.015l-3-3 3-3M16.5 15.015l3-3-3-3M5.5 19.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M18.5 19.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M18.5 19.75"
    />
  );

export default SvgConnectDeviceExchange;
