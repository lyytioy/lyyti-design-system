import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-signal-4_svg__a"
      d="M7.5 23.248l4.5-12v-3 3l4.5 12M17.726.747a9 9 0 010 15M16.5 4.575a5.249 5.249 0 010 7.347M6.275.747a9 9 0 000 15M7.5 4.575a5.251 5.251 0 000 7.347M8.625 20.248h6.75"
    />
  );

export default SvgWifiSignal4;
