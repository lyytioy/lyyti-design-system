import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodListen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpod-listen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpod-listen_svg__a"
      d="M14.25 16.745V15M11.25 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="earpod-listen_svg__a"
      d="M17.25 12v10.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75v-5.755a5.255 5.255 0 01-6-1.071V8.326a5.25 5.25 0 019 3.674zM.75 8.25a7.5 7.5 0 017.5-7.5M3.75 8.25a4.5 4.5 0 014.5-4.5M23.25 8.25a7.5 7.5 0 00-7.5-7.5M20.25 8.25a4.5 4.5 0 00-4.5-4.5"
    />
  );

export default SvgEarpodListen;
