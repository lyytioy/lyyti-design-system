import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAndroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".android_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="android_svg__a"
      d="M18.5 8a6.5 6.5 0 10-13 0v.5h13zM5.5 10.504h13v9h-13zM8.5 19.504v4M15.5 19.504v4M18.5 10.504h3v7M5.5 10.504h-3v7M16.068 2.935L18.5.504M7.931 2.934L5.5.504M9.5 4.504v1.5M14.5 4.504v1.5"
    />
  );

export default SvgAndroid;
