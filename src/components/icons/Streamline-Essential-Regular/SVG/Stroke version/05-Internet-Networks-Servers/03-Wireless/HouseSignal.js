import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouseSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".house-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="house-signal_svg__a"
      d="M5.32 9a9.75 9.75 0 0113.165-.029M3 3.885a14.252 14.252 0 0117.991.126M7.419 15.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="house-signal_svg__a"
      d="M5.919 17.26l4.518-3.953a2.25 2.25 0 012.963 0l4.519 3.953M13.419 23.25h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgHouseSignal;
