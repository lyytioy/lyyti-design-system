import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRing = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-ring_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-ring_svg__a"
      d="M9.568 12.43a4.5 4.5 0 010-6.364M6.916 15.082a8.251 8.251 0 010-11.668M4.265 17.733a12 12 0 010-16.97M17.25 23.263l3-3.75V5.263"
    />,
    <path
      className="phone-ring_svg__a"
      d="M14.25 23.263h9v-18H15a.75.75 0 00-.75.75v4.323a1.5 1.5 0 00.829 1.341l2.171 1.086v5.25l-3.671 1.835a1.5 1.5 0 00-.829 1.342v.573a1.5 1.5 0 001.5 1.5zM23.25.763v4.5"
    />
  );

export default SvgPhoneRing;
