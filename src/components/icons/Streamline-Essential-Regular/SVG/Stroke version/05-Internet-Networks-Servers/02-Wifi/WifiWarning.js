import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wifi-warning_svg__a"
      d="M5.96 11.284a5.25 5.25 0 016.629-.647M3.07 7.822a9.75 9.75 0 0113.165-.029M.75 3.885a14.252 14.252 0 0117.85.007M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M17.25 18v-3"
    />,
    <path
      className="wifi-warning_svg__a"
      d="M23.063 20.683a1.774 1.774 0 01-1.587 2.567h-8.452a1.774 1.774 0 01-1.587-2.567l4.226-8.452a1.774 1.774 0 013.174 0z"
    />
  );

export default SvgWifiWarning;
