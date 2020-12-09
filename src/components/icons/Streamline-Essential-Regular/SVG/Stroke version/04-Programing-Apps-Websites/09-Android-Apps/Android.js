import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="android_svg__a"
      d="M16.5 19.274h-9a1.5 1.5 0 01-1.5-1.5v-6h12v6a1.5 1.5 0 01-1.5 1.5zM12 2.774a6 6 0 00-6 6h12a6 6 0 00-6-6z"
    />,
    <path
      className="android_svg__a"
      d="M3 16.274v-1.5a3 3 0 013-3h12a3 3 0 013 3v1.5M7.5 19.274v3.124M16.5 19.274v3.124M7.949 4.347L5.25 1.649M16.051 4.347l2.699-2.698"
    />
  );

export default SvgAndroid;
