import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-hand_svg__a"
      d="M16.5 11.247v-1.5a1.5 1.5 0 00-3 0V9a1.5 1.5 0 00-3 0V3a1.5 1.5 0 00-3 0v9a3 3 0 00-3 3 7.017 7.017 0 001.308 4.081l1.1 1.535a4.5 4.5 0 003.658 1.884h3.813a5.121 5.121 0 005.121-5.124v-6.129a1.5 1.5 0 00-3 0zM7.5 11.997v2.25M10.5 11.247v-1.5M13.5 11.247v-1.5M16.5 11.247"
    />
  );

export default SvgCursorHand;
