import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="wifi-transfer_svg__a"
      x={0.75}
      y={5.25}
      width={10.5}
      height={18}
      rx={2.25}
      ry={2.25}
    />,
    <path
      className="wifi-transfer_svg__a"
      d="M.75 18.75h10.5M14.25 14.25h7.5a1.5 1.5 0 001.5-1.5V2.25a1.5 1.5 0 00-1.5-1.5H8.25a1.5 1.5 0 00-1.5 1.5M14.25 23.25l6-6M20.25 21.75v-4.5h-4.5M15.893 10.5"
    />,
    <path
      className="wifi-transfer_svg__a"
      d="M15.893 10.5a.375.375 0 10.375.375.374.374 0 00-.375-.375M21 5.36a8.984 8.984 0 00-7.5-1.27M13.5 7.249a6.009 6.009 0 015.677.481"
    />
  );

export default SvgWifiTransfer;
