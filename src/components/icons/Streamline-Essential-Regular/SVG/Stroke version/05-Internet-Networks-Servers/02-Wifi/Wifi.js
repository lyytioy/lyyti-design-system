import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="wifi_svg__a" cx={12} cy={18.75} r={3} />,
    <path
      className="wifi_svg__a"
      d="M17.3 13.447a7.5 7.5 0 00-10.606 0M20.485 10.265a12 12 0 00-16.97 0M23.25 6.681a16.5 16.5 0 00-22.5 0"
    />
  );

export default SvgWifi;
