import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-sync_svg__a"
      d="M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733M7.873 19.881A26.129 26.129 0 016.75 12c0-4.633 1.018-8.688 2.539-10.921M.775 11.25H10.5M2.999 5.25H21M2.048 17.25H8.25M14.711 1.079a16.184 16.184 0 012.2 6.416M7.96 22.5A11.252 11.252 0 1122.608 8.245"
    />
  );

export default SvgNetworkSync;
