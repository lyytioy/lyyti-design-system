import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-live_svg__a"
      d="M3 5.25a11.252 11.252 0 0118 0M7.8 5.25c.958-2.732 2.482-4.5 4.2-4.5s3.243 1.768 4.2 4.5M23.25 18.75H.75M.75 5.25h22.5M21 18.75a11.252 11.252 0 01-18 0"
    />,
    <path
      className="network-live_svg__a"
      d="M16.2 18.75c-.957 2.733-2.482 4.5-4.2 4.5s-3.242-1.767-4.2-4.5M9.75 15.75v-7.5M12.75 8.25v2.55a8.932 8.932 0 001.5 4.954 8.932 8.932 0 001.5-4.954V8.25M3.75 8.25v6a1.5 1.5 0 001.5 1.5h1.5M21.75 15.75h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M18.75 12.75h3"
    />
  );

export default SvgNetworkLive;
