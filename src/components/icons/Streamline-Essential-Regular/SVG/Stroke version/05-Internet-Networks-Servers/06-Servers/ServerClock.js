import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-clock_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M10.501 5.25h6.75M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-clock_svg__a"
      d="M11.936 9.75H5.251a4.5 4.5 0 010-9h12A4.5 4.5 0 0120.3 8.563M8.251 18.75h-3a4.5 4.5 0 010-9"
    />,
    <circle className="server-clock_svg__a" cx={17.251} cy={17.25} r={6} />,
    <path className="server-clock_svg__a" d="M19.903 17.25h-2.652v-3" />
  );

export default SvgServerClock;
