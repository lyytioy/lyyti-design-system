import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCameraPolaroid = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera-polaroid_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vintage-camera-polaroid_svg__a"
      d="M3.75 11.25l-2.68 3.631M20.25 11.25l2.68 3.631M21.519 20.25a1.628 1.628 0 001.731-1.5v-3a1.628 1.628 0 00-1.731-1.5H2.481a1.628 1.628 0 00-1.731 1.5v3a1.628 1.628 0 001.731 1.5M5.25 17.25h13.5"
    />,
    <circle className="vintage-camera-polaroid_svg__a" cx={12} cy={6} r={3} />,
    <path
      className="vintage-camera-polaroid_svg__a"
      d="M6.75 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375M6.75 17.25l-2.25 6h15l-2.25-6H6.75z"
    />,
    <path
      className="vintage-camera-polaroid_svg__a"
      d="M20.25 11.25H3.75v-7.5a3 3 0 013-3h10.5a3 3 0 013 3z"
    />
  );

export default SvgVintageCameraPolaroid;
