import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-clock_svg__a"
      d="M5.96 11.284a5.253 5.253 0 015.877-1.066M3.07 7.822a9.75 9.75 0 0113.165-.029M.75 3.885a14.252 14.252 0 0117.85.007"
    />,
    <circle className="wifi-clock_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path className="wifi-clock_svg__a" d="M19.902 17.25H17.25v-2.651" />
  );

export default SvgWifiClock;
