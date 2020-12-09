import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-clock_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="network-clock_svg__a"
      d="M19.902 17.25H17.25v-2.651M10.494 23.15a11.251 11.251 0 1112.658-12.644"
    />,
    <path
      className="network-clock_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25h9.523M2.999 5.25H21M2.048 17.25H8.25M14.711 1.079a16.983 16.983 0 012.3 7.136"
    />
  );

export default SvgNetworkClock;
