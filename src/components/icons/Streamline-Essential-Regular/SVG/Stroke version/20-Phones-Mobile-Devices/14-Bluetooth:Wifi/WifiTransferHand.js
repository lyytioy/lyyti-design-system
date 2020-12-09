import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiTransferHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-transfer-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-transfer-hand_svg__a"
      d="M15.75 15l-1.673-1.255a1.569 1.569 0 00-2.246.385 1.566 1.566 0 000 1.74l1.644 2.467a4.5 4.5 0 002.073 1.682L18 21v2.25M15 9.75l3.6 1.541a4.5 4.5 0 012.363 2.364l1.173 2.745a4.483 4.483 0 01.364 1.773v5.077"
    />,
    <path
      className="wifi-transfer-hand_svg__a"
      d="M15 14.438V7.5a2.25 2.25 0 00-2.25-2.25h-6A2.251 2.251 0 004.5 7.5V21a2.25 2.25 0 002.25 2.25h6A2.25 2.25 0 0015 21v-1.245M13.786 18.75H4.5M1.5 6A5.251 5.251 0 016.75.75M18 6A5.25 5.25 0 0012.75.75"
    />
  );

export default SvgWifiTransferHand;
