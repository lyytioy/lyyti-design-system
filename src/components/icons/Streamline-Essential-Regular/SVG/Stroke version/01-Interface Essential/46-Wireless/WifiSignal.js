import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-signal_svg__a"
      d="M12 11.997v11.25M20.426 19.45a11.25 11.25 0 10-16.852 0M15.22 13.919a3.75 3.75 0 10-6.44 0M17.84 15.85a7.5 7.5 0 10-11.68 0"
    />
  );

export default SvgWifiSignal;
