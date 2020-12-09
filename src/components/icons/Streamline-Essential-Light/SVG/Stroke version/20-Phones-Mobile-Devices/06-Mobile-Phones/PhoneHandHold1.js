import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneHandHold1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-hand-hold-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-hand-hold-1_svg__a"
      d="M9.5 9.5v-7a2 2 0 012-2h9a2 2 0 012 2v19a2 2 0 01-2 2h-9a2 2 0 01-2-2v-1"
    />,
    <path
      className="phone-hand-hold-1_svg__a"
      d="M7.5 19.467a3.2 3.2 0 002-2.967h3a2 2 0 000-4h-6"
    />,
    <path
      className="phone-hand-hold-1_svg__a"
      d="M9.5 7.5h-2a6 6 0 00-6 6v5.046c0 1.513.672 2.23 2 2.954v2M16.177 20.573a.25.25 0 11-.354 0 .252.252 0 01.354 0"
    />
  );

export default SvgPhoneHandHold1;
