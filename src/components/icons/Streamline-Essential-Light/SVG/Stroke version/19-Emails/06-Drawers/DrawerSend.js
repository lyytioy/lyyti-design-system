import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDrawerSend = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".drawer-send_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="drawer-send_svg__a"
      d="M23.5 22.5a1 1 0 01-1 1h-21a1 1 0 01-1-1v-6h7v1a2.006 2.006 0 002 2h5a2.006 2.006 0 002-2v-1h7zM14.5 10.5h4.926a1 1 0 01.863.5l3.211 5.5M.5 16.5L3.711 11a1 1 0 01.863-.5H6.5"
    />,
    <path
      className="drawer-send_svg__a"
      d="M18.5 8.5v-2a9.806 9.806 0 00-10 7.5s0-11.5 10-11.5v-2l5 4z"
    />
  );

export default SvgDrawerSend;
