import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-sync_svg__a"
      d="M5.96 11.284A5.234 5.234 0 019.668 9.75a5.365 5.365 0 01.818.063M3.07 7.822a9.751 9.751 0 0112.655-.463M.75 3.885a14.252 14.252 0 0117.85.007M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733"
    />
  );

export default SvgWifiSync;
