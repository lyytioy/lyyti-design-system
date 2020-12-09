import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="picture-landscape_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="picture-landscape_svg__a"
      d="M23.5 17.5H.5M9.5 3.5a2.5 2.5 0 00-2.46 2.1 1.5 1.5 0 10-.54 2.9h3a2.5 2.5 0 000-5zM3.5 17.5s2-5 4.5-5 4.5 3 4.5 3l3.015-5.168a1.677 1.677 0 012.948.1L22 17.5"
    />
  );

export default SvgPictureLandscape;
