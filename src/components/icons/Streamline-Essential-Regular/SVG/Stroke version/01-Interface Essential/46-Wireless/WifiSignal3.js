import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-signal-3_svg__a"
      d="M7.5 23.247l4.5-12v-3 3l4.5 12M7.759 9.755a4.5 4.5 0 118.48.007M6.712 13.566a7.5 7.5 0 1110.577 0M4.5 23.247h15M1.125 22.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M22.875 22.5a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgWifiSignal3;
