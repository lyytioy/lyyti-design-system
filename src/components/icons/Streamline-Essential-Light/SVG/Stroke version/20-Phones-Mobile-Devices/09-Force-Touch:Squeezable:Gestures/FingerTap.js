import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFingerTap = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".finger-tap_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="finger-tap_svg__a"
      d="M6.487 15.445a6.5 6.5 0 1111.016.014M9 .5l3 3 3-3M23.5 9l-3 3 3 3M.5 15l3-3-3-3"
    />,
    <path
      className="finger-tap_svg__a"
      d="M8.5 23.5V13a3.5 3.5 0 017 0v10.5"
    />,
    <path className="finger-tap_svg__a" d="M13.5 13a1.5 1.5 0 00-3 0v1.5h3z" />
  );

export default SvgFingerTap;
