import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTabletTouch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tablet-touch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tablet-touch_svg__a"
      d="M13.5 22.5l-2.929-2.344A1.637 1.637 0 0110 18.48a1.637 1.637 0 012.321-1.067L13.5 18v-5.25a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v3l1.993.332A3 3 0 0121 19.041V22.5M5.247 6h7.5M5.247 9h7.5M5.247 12h3.75"
    />,
    <path
      className="tablet-touch_svg__a"
      d="M7.5 18H2.247a1.5 1.5 0 01-1.5-1.5V3a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v12M18.747 1.5v9"
    />
  );

export default SvgTabletTouch;
