import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnectDeviceExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".connect-device-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="connect-device-exchange_svg__a"
      d="M9.75 14.25V18a2.25 2.25 0 01-2.25 2.25H3A2.25 2.25 0 01.75 18V6A2.25 2.25 0 013 3.75h4.5A2.25 2.25 0 019.75 6v2.25M.75 17.25h9M14.25 8.25V6a2.25 2.25 0 012.25-2.25H21A2.25 2.25 0 0123.25 6v12A2.25 2.25 0 0121 20.25h-4.5A2.25 2.25 0 0114.25 18v-3.749M14.25 6.75h9M14.25 17.25h9"
    />,
    <path
      className="connect-device-exchange_svg__a"
      d="M6.75 9L4.5 11.25l2.25 2.25M17.25 9l2.25 2.25-2.25 2.25M4.5 11.25h15"
    />
  );

export default SvgConnectDeviceExchange;
