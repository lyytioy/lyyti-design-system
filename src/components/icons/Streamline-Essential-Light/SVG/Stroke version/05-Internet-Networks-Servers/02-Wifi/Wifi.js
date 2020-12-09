import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi_svg__a"
      d="M5.03 10.43a10 10 0 0114.142 0M22 6.6a14 14 0 00-19.8 0M7.857 14.257a6 6 0 018.486 0M19.172 10.43a10 10 0 00-14.142 0M16.344 14.257a6 6 0 00-8.486 0"
    />,
    <circle className="wifi_svg__a" cx={12.1} cy={19.5} r={2} />
  );

export default SvgWifi;
