import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkWww = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-www_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-www_svg__a"
      d="M3 5.25a11.252 11.252 0 0118 0M7.8 5.25c.958-2.732 2.482-4.5 4.2-4.5s3.243 1.768 4.2 4.5M23.25 18.75H.75M.75 5.25h22.5M21 18.75a11.252 11.252 0 01-18 0"
    />,
    <path
      className="network-www_svg__a"
      d="M16.2 18.75c-.957 2.733-2.482 4.5-4.2 4.5s-3.242-1.767-4.2-4.5M2.25 8.25v2.859a9.014 9.014 0 00.175 1.765L3 15.75l1.5-4.5 1.5 4.5.575-2.876a8.938 8.938 0 00.175-1.765V8.25M9.75 8.25v2.859a9.014 9.014 0 00.175 1.765l.575 2.876 1.5-4.5 1.5 4.5.575-2.876a8.938 8.938 0 00.175-1.765V8.25M17.25 8.25v2.859a9.014 9.014 0 00.175 1.765L18 15.75l1.5-4.5 1.5 4.5.575-2.876a8.938 8.938 0 00.175-1.765V8.25"
    />
  );

export default SvgNetworkWww;
