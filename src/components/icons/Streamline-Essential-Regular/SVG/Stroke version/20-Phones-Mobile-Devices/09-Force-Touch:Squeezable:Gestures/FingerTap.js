import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFingerTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".finger-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="finger-tap_svg__a"
      d="M6.386 15.749A6.749 6.749 0 1118.048 15M23.25 9.751L21 12.001l2.25 2.25M9.75.751L12 3.001l2.25-2.25M.75 14.251L3 12.001.75 9.751"
    />,
    <path
      className="finger-tap_svg__a"
      d="M9 23.25v-9a3 3 0 016 0v9M11.25 15h1.5"
    />
  );

export default SvgFingerTap;
