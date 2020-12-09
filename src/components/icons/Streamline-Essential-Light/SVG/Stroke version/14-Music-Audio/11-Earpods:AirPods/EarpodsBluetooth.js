import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsBluetooth = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-bluetooth_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="earpods-bluetooth_svg__a"
      d="M17.5 4.5v4.19a4.93 4.93 0 001.775 3.789A3.405 3.405 0 0117.1 18.5M19.5 4.5H17a1.5 1.5 0 010-3h2.5z"
    />,
    <path
      className="earpods-bluetooth_svg__a"
      d="M19.5 5a.5.5 0 00.5.5h1a2.5 2.5 0 000-5h-1a.5.5 0 00-.5.5zM6.5 4.5v4.19a4.93 4.93 0 01-1.775 3.789 3.405 3.405 0 002.18 6.021M4.5 4.5H7a1.5 1.5 0 000-3H4.5z"
    />,
    <path
      className="earpods-bluetooth_svg__a"
      d="M4.5 5a.5.5 0 01-.5.5H3a2.5 2.5 0 010-5h1a.5.5 0 01.5.5zM8.5 13.5l7 7-3 3v-12l3 3-7 7"
    />
  );

export default SvgEarpodsBluetooth;
