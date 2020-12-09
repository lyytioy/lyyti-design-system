import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTv3D = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-3d_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-3d_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-3d_svg__a"
      d="M10.5 19h3v3h-3zM7 22h10M5.5 6h3a2 2 0 010 4 2 2 0 010 4h-3M13.5 6a4 4 0 010 8z"
    />
  );

export default SvgModernTv3D;
