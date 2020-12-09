import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="wifi-off_svg__a" d="M.75 23.25L23.25.75" />,
    <circle className="wifi-off_svg__a" cx={12} cy={20.25} r={3} />,
    <path
      className="wifi-off_svg__a"
      d="M17.3 14.947a7.477 7.477 0 00-2.253-1.547M11.251 8.273a11.95 11.95 0 00-7.736 3.492M20.485 11.765a12.017 12.017 0 00-2.53-1.936M14.952 4.016A16.484 16.484 0 00.75 8.181M23.25 8.181A16.464 16.464 0 0020.812 6.3"
    />
  );

export default SvgWifiOff;
