import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="wifi-signal-2_svg__a" cx={12} cy={10.319} r={2.25} />,
    <path
      className="wifi-signal-2_svg__a"
      d="M12 12.569v9.684M19.286 18.89a11.249 11.249 0 000-17.143M16.371 15.462a6.749 6.749 0 000-10.286M4.714 18.89a11.249 11.249 0 010-17.143M7.629 15.462a6.749 6.749 0 010-10.286"
    />
  );

export default SvgWifiSignal2;
