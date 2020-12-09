import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingWirelessChargingPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-wireless-charging-port_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-wireless-charging-port_svg__a"
      d="M23.5 19.5h-6v-4a2 2 0 012-2h2a2 2 0 012 2v4zM22.5 23.5h-4v-4h4z"
    />,
    <path
      className="charging-wireless-charging-port_svg__a"
      d="M20.5 13.5V8a3.5 3.5 0 00-7 0v11.5a4 4 0 01-8 0v-7"
    />,
    <circle
      className="charging-wireless-charging-port_svg__a"
      cx={5.5}
      cy={5.5}
      r={5}
    />,
    <circle
      className="charging-wireless-charging-port_svg__a"
      cx={5.5}
      cy={5.5}
      r={3}
    />,
    <path
      className="charging-wireless-charging-port_svg__a"
      d="M4.5 10.4v2.1h2v-2.1"
    />
  );

export default SvgChargingWirelessChargingPort;
