import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingWirelessChargingPort = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-wireless-charging-port_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="charging-wireless-charging-port_svg__a"
      cx={6}
      cy={6}
      r={5.25}
    />,
    <circle
      className="charging-wireless-charging-port_svg__a"
      cx={6}
      cy={6}
      r={2.25}
    />,
    <path
      className="charging-wireless-charging-port_svg__a"
      d="M17.25 18.75h4.5v4.5h-4.5zM23.25 18.75h-7.5v-4.5a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="charging-wireless-charging-port_svg__a"
      d="M6 11.25v8.25a3.75 3.75 0 007.5 0V6.75a3 3 0 016 0v6"
    />
  );

export default SvgChargingWirelessChargingPort;
