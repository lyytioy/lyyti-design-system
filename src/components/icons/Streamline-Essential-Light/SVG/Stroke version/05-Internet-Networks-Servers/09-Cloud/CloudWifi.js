import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-wifi_svg__a"
      d="M23.5 17.5a4.991 4.991 0 00-5.18-4.991 6.988 6.988 0 00-13.3 2.571A3.751 3.751 0 00.5 18.75c0 3.81 4 3.75 4 3.75H19s4.5-.586 4.5-5zM16.277 2.929a8.491 8.491 0 00-9.429 0M14.059 5.5a4.5 4.5 0 00-4.992 0"
    />
  );

export default SvgCloudWifi;
