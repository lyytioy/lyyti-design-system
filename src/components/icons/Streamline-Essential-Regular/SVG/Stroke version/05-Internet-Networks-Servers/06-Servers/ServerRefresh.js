import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-refresh_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-refresh_svg__a"
      d="M12.714 9.75H5.251a4.5 4.5 0 010-9h12a4.5 4.5 0 013.063 7.8M8.251 18.75h-3a4.5 4.5 0 010-9h7.5M10.501 5.25h6.75M19.501 15.75h3.75v-4.5M23.062 15.75a6 6 0 10-1.121 5.243"
    />
  );

export default SvgServerRefresh;
