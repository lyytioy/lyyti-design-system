import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-sync_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-sync_svg__a"
      d="M12.75 9.75h-7.5a4.5 4.5 0 010-9h12a4.5 4.5 0 013.025 7.832M8.249 18.75h-3a4.5 4.5 0 010-9M10.501 5.25h6.75M14.999 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.499 15.75h3.75V12M11.832 15.017a5.572 5.572 0 0110.74.733"
    />
  );

export default SvgServerSync;
