import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgForceTouchDoubleTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".force-touch-double-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="force-touch-double-tap_svg__a"
      d="M11.307 23.25h-7.5a3 3 0 01-3-3V3.75a3 3 0 013-3h7.5a3 3 0 013 3V6M.807 18.75h6"
    />,
    <path
      className="force-touch-double-tap_svg__a"
      d="M23.193 16.152l-2.445-2.446a3 3 0 00-3.865-.32l-1.644 1.175-2.122-2.121A1.5 1.5 0 1011 14.561l3.712 3.712-1.245.415a1.637 1.637 0 00.7 3.181l3.728-.414M9.061 16.651A4.5 4.5 0 1115.2 10.5"
    />
  );

export default SvgForceTouchDoubleTap;
