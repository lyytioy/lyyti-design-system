import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="wifi-signal_svg__a" d="M8.5 14v-2a3.5 3.5 0 117 0v2" />,
    <path
      className="wifi-signal_svg__a"
      d="M4.5 14v-2a7.5 7.5 0 0115 0v2M12 12.498v11"
    />,
    <path className="wifi-signal_svg__a" d="M.5 14v-2a11.5 11.5 0 0123 0v2" />
  );

export default SvgWifiSignal;
