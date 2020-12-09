import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroidSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="android-sync_svg__a"
      d="M9.75 11.253h-6v10.5a1.5 1.5 0 001.5 1.5h3M19.941 8.257A8.251 8.251 0 003.75 10.5v.75"
    />,
    <path
      className="android-sync_svg__a"
      d="M8.625 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.375 6.753a.375.375 0 11-.375.375.375.375 0 01.375-.375M7.359 3.682L5.25.753M16.641 3.682L18.75.753M3.75 11.253a3 3 0 00-3 3v6M15 18.753h-3.75v3.75M22.667 19.487a5.573 5.573 0 01-10.74-.734M19.5 15.753h3.75v-3.75M11.833 15.02a5.572 5.572 0 0110.74.733"
    />
  );

export default SvgAndroidSync;
