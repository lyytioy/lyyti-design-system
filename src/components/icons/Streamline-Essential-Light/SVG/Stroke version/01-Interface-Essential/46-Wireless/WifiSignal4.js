import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-signal-4_svg__a"
      d="M17 23.5L12.6 9.371a1.485 1.485 0 01-1.2 0L7 23.5"
    />,
    <circle className="wifi-signal-4_svg__a" cx={11.996} cy={7.998} r={1.5} />,
    <path
      className="wifi-signal-4_svg__a"
      d="M17.592 3.4a6.5 6.5 0 010 9.192M19.714 1.28a9.5 9.5 0 010 13.435M6.4 3.4a6.5 6.5 0 000 9.192M4.278 1.28a9.5 9.5 0 000 13.435M9.182 16.498h5.636M7.935 20.498h8.13"
    />
  );

export default SvgWifiSignal4;
