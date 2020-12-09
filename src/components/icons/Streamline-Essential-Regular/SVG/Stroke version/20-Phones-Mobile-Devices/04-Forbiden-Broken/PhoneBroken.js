import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneBroken = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-broken_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-broken_svg__a"
      d="M18.75 13.5v6.75a3 3 0 01-3 3h-7.5a3 3 0 01-3-3V12M18.75 9.75v-6a3 3 0 00-3-3h-7.5a3 3 0 00-3 3v4.5l4.5 2.25L15 8.25zM5.25 18.75h13.5M21.75 11.25h1.5M21.75 8.25l1.5-.75M21.75 14.25l1.5.75M2.25 11.25H.75M2.25 8.25L.75 7.5M2.25 14.25L.75 15"
    />
  );

export default SvgPhoneBroken;
