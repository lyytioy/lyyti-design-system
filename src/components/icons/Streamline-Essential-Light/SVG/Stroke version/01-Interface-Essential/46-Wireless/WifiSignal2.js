import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-signal-2_svg__a"
      d="M12 14.998v8.5M19.632 4a11.5 11.5 0 010 16.264M16.8 6.827a7.5 7.5 0 010 10.607M4.368 4a11.5 11.5 0 000 16.264M7.2 6.827a7.5 7.5 0 000 10.607"
    />,
    <circle className="wifi-signal-2_svg__a" cx={12} cy={11.998} r={3} />
  );

export default SvgWifiSignal2;
