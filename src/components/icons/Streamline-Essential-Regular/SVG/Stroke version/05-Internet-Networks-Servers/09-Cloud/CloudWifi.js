import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-wifi_svg__a"
      d="M16.874 23.251a3.375 3.375 0 10-2.631-5.489A5.25 5.25 0 109 23.251zM14.651 7.1a3.752 3.752 0 00-5.3 0M18.363 3.387a9 9 0 00-12.728 0"
    />
  );

export default SvgCloudWifi;
