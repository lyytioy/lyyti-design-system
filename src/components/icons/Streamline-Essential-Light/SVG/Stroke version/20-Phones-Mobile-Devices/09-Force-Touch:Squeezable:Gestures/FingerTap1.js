import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFingerTap1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".finger-tap-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="finger-tap-1_svg__a"
      d="M6.487 15.445a6.5 6.5 0 1111.016.013M9 .499l3 3 3-3M23.5 8.999l-3 3 3 3M.5 14.999l3-3-3-3"
    />,
    <path
      className="finger-tap-1_svg__a"
      d="M17.5 23.5v-2.668a3.333 3.333 0 00-3.333-3.332H12.5V13a1.5 1.5 0 00-3 0v7.416L8.211 18.92a1.25 1.25 0 00-1.922 1.6l2.479 2.98"
    />
  );

export default SvgFingerTap1;
