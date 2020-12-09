import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="wifi-signal-1_svg__a" cx={12} cy={11.952} r={1.5} />,
    <path
      className="wifi-signal-1_svg__a"
      d="M15.712 8.24a5.249 5.249 0 010 7.425M8.288 15.665a5.249 5.249 0 010-7.425M17.834 6.119a8.251 8.251 0 010 11.667M6.166 17.786a8.249 8.249 0 010-11.667M19.955 4a11.251 11.251 0 010 15.91M4.045 19.907A11.251 11.251 0 014.045 4"
    />
  );

export default SvgWifiSignal1;
